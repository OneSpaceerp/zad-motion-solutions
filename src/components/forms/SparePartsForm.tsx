import { useState } from 'react';
import { Send, CheckCircle2, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export const SparePartsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    pumpManufacturer: '',
    pumpModel: '',
    serialNumber: '',
    partType: 'Mechanical Seal',
    partDescription: ''
  });
  const [platePhoto, setPlatePhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const partTypes = [
    'Mechanical Seal',
    'Bearing Set',
    'Impeller',
    'Wear Rings',
    'Shaft Sleeve',
    'Coupling Insert',
    'Gasket & O-Ring Kit',
    'Electrical / Sensor Component',
    'Complete Overhaul Kit',
    'Other'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Plate image exceeds 10MB limit.');
      return;
    }

    setPlatePhoto(file);
    toast.success(`Attached ${file.name}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Spare parts inquiry submitted. ZAD parts specialists will verify part availability.');
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center shadow-sm">
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h4 className="text-xl font-bold text-primary mb-2">Parts Inquiry Received</h4>
        <p className="text-sm text-muted-foreground mb-6">
          Our spare parts engineers will verify the pump specification and cross-reference OEM part numbers to quote genuine replacement components.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              company: '',
              phone: '',
              email: '',
              pumpManufacturer: '',
              pumpModel: '',
              serialNumber: '',
              partType: 'Mechanical Seal',
              partDescription: ''
            });
            setPlatePhoto(null);
          }}
          className="btn-hero-outline text-xs px-5 py-2.5 font-bold uppercase tracking-wider"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border/70 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
      <div className="border-b border-border/60 pb-3 mb-4">
        <h3 className="text-xl font-bold text-primary">Request Genuine Spare Parts</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Provide your pump model and nameplate details to receive verified genuine component pricing and availability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Contact Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Organization"
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+20 1..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Work Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="engineer@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Pump Manufacturer
          </label>
          <input
            type="text"
            name="pumpManufacturer"
            value={formData.pumpManufacturer}
            onChange={handleChange}
            placeholder="e.g. KSB, Grundfos, Lowara"
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Pump Model Code <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="pumpModel"
            required
            value={formData.pumpModel}
            onChange={handleChange}
            placeholder="e.g. Etanorm 65-250"
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Required Part Type
          </label>
          <select
            name="partType"
            value={formData.partType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {partTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Part Specifications & Description <span className="text-destructive">*</span>
        </label>
        <textarea
          name="partDescription"
          required
          rows={3}
          value={formData.partDescription}
          onChange={handleChange}
          placeholder="Specify component description, dimensions, shaft diameter, seal materials, or quantity required..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="border border-dashed border-border p-4 rounded-xl text-center bg-muted/30">
        <ImageIcon className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
        <div className="text-xs font-semibold text-foreground mb-1">Equipment Nameplate Photo</div>
        <p className="text-[11px] text-muted-foreground mb-2">
          Uploading the equipment nameplate ensures 100% correct part identification.
        </p>
        <label className="btn-hero-outline inline-block text-xs py-1.5 px-4 cursor-pointer font-bold">
          <span>{platePhoto ? platePhoto.name : 'Upload Nameplate Photo'}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-hero w-full text-xs py-3 font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
      >
        {isSubmitting ? <span>Processing...</span> : <><span>Submit Parts Inquiry</span><Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
};

export default SparePartsForm;
