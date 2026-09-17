import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Upload, CheckCircle2, AlertCircle, Send, FileText, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

export const RequestServiceForm = () => {
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectLocation: '',
    applicationType: '',
    equipmentManufacturer: '',
    pumpModel: '',
    serviceRequired: 'Commissioning',
    message: ''
  });

  // Attachments State
  const [attachments, setAttachments] = useState<{
    pumpPhoto: File | null;
    platePhoto: File | null;
    techDoc: File | null;
  }>({
    pumpPhoto: null,
    platePhoto: null,
    techDoc: null
  });

  // UTM and Attribution tracking
  const [trackingData, setTrackingData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    source_page: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setTrackingData({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      source_page: location.pathname
    });

    // Check if a pre-selected service was passed in query param
    const preService = params.get('service');
    if (preService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preService }));
    }
  }, [location]);

  const serviceOptions = [
    'Commissioning',
    'Maintenance',
    'Emergency Repair',
    'Pump Inspection',
    'Booster Set',
    'Chiller Pumps',
    'Submersible Pumps',
    'Local Assembly',
    'Spare Parts',
    'Technical Consultation',
    'Other'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'pumpPhoto' | 'platePhoto' | 'techDoc'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      toast.error(`File size exceeds 10MB limit: ${file.name}`);
      e.target.value = '';
      return;
    }

    // Validate extension / MIME
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      toast.error(`Invalid file format: ${file.name}. Only JPG, PNG, WEBP, and PDF are permitted.`);
      e.target.value = '';
      return;
    }

    setAttachments((prev) => ({ ...prev, [field]: file }));
    toast.success(`Attached ${file.name}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate unique inquiry number per PRD format: ZAD-REQ-YYYY-XXXXX
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const inquiryNumber = `ZAD-REQ-${year}-${randomSuffix}`;

    setTimeout(() => {
      // Store inquiry locally in localStorage for persistent lead record
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('zad_inquiries') || '[]');
        existingInquiries.push({
          inquiryNumber,
          formData,
          trackingData,
          createdAt: new Date().toISOString(),
          status: 'New'
        });
        localStorage.setItem('zad_inquiries', JSON.stringify(existingInquiries));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      setIsSubmitting(false);
      setSubmittedInquiry(inquiryNumber);
      toast.success('Thank you. Your request has been received and our team will review the information provided.');
    }, 600);
  };

  if (submittedInquiry) {
    return (
      <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-lg animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          Request Successfully Submitted
        </h3>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6">
          Thank you. Your request has been received and our team will review the information provided.
        </p>
        <div className="inline-block bg-muted p-4 rounded-xl border border-border/60 text-xs font-mono mb-8">
          <span className="text-muted-foreground">Reference Tracking Number: </span>
          <strong className="text-primary font-bold text-sm ml-2">{submittedInquiry}</strong>
        </div>
        <div>
          <button
            onClick={() => {
              setSubmittedInquiry(null);
              setFormData({
                fullName: '',
                companyName: '',
                phone: '',
                email: '',
                projectLocation: '',
                applicationType: '',
                equipmentManufacturer: '',
                pumpModel: '',
                serviceRequired: 'Commissioning',
                message: ''
              });
              setAttachments({ pumpPhoto: null, platePhoto: null, techDoc: null });
            }}
            className="btn-hero-outline text-xs px-6 py-3 font-semibold uppercase tracking-wider"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border/70 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
      <div className="border-b border-border/60 pb-4 mb-6">
        <h3 className="text-2xl font-bold text-primary">Tell Us What Your System Needs</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Provide your system and project details. Our engineering team will review your specifications and contact you promptly.
        </p>
      </div>

      {/* Row 1: Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. Eng. Ahmed Hassan"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Company / Organization Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="e.g. Delta Contracting & MEP"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="e.g. +20 100 123 4567"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Work Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. engineer@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 3: Location & Application */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Project Location (City / Governorate) <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="projectLocation"
            required
            value={formData.projectLocation}
            onChange={handleInputChange}
            placeholder="e.g. 6th of October City, Giza"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Application Type
          </label>
          <input
            type="text"
            name="applicationType"
            value={formData.applicationType}
            onChange={handleInputChange}
            placeholder="e.g. Commercial Booster / Chilled Water HVAC / Sump"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 4: Equipment specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Service Required <span className="text-destructive">*</span>
          </label>
          <select
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Equipment Manufacturer
          </label>
          <input
            type="text"
            name="equipmentManufacturer"
            value={formData.equipmentManufacturer}
            onChange={handleInputChange}
            placeholder="e.g. KSB, Grundfos, Lowara, etc."
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
            Pump Model / Code
          </label>
          <input
            type="text"
            name="pumpModel"
            value={formData.pumpModel}
            onChange={handleInputChange}
            placeholder="e.g. Helix V 1604 or Etanorm 50-200"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
          Message & Problem Description <span className="text-destructive">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Describe your equipment symptoms, required scope of work, operating conditions, or urgency..."
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Attachments Section */}
      <div className="border-t border-border/60 pt-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
          Optional Technical Attachments (Max 10MB each, JPG / PNG / PDF)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Pump Photo */}
          <div className="border border-dashed border-border p-3.5 rounded-xl text-center bg-muted/30 hover:bg-muted/50 transition-colors">
            <ImageIcon className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-xs font-semibold text-foreground mb-1">Pump Photo</div>
            <label className="inline-block text-[11px] font-bold text-primary hover:text-accent cursor-pointer">
              <span>{attachments.pumpPhoto ? attachments.pumpPhoto.name.slice(0, 16) + '...' : 'Upload Image'}</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'pumpPhoto')}
              />
            </label>
          </div>

          {/* Equipment Plate Photo */}
          <div className="border border-dashed border-border p-3.5 rounded-xl text-center bg-muted/30 hover:bg-muted/50 transition-colors">
            <ImageIcon className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-xs font-semibold text-foreground mb-1">Nameplate Photo</div>
            <label className="inline-block text-[11px] font-bold text-primary hover:text-accent cursor-pointer">
              <span>{attachments.platePhoto ? attachments.platePhoto.name.slice(0, 16) + '...' : 'Upload Plate'}</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'platePhoto')}
              />
            </label>
          </div>

          {/* Technical Document */}
          <div className="border border-dashed border-border p-3.5 rounded-xl text-center bg-muted/30 hover:bg-muted/50 transition-colors">
            <FileText className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-xs font-semibold text-foreground mb-1">Technical Document</div>
            <label className="inline-block text-[11px] font-bold text-primary hover:text-accent cursor-pointer">
              <span>{attachments.techDoc ? attachments.techDoc.name.slice(0, 16) + '...' : 'Upload PDF'}</span>
              <input
                type="file"
                accept="application/pdf,image/jpeg,image/png"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'techDoc')}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-muted-foreground flex items-center space-x-1.5">
          <AlertCircle className="h-4 w-4 text-accent flex-shrink-0" />
          <span>Emergency requirements can also be dispatched by calling (+20) 02 3865 4079</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-hero w-full sm:w-auto text-xs px-8 py-3.5 uppercase font-bold tracking-wider flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <span>Processing Request...</span>
          ) : (
            <>
              <span>Submit Service Request</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default RequestServiceForm;
