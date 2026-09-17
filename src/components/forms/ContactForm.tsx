import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Your message has been sent. A ZAD engineering representative will contact you.');
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center shadow-sm">
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h4 className="text-xl font-bold text-primary mb-2">Message Received</h4>
        <p className="text-sm text-muted-foreground mb-6">
          Thank you for reaching out to ZAD Electromechanical Services. Our technical support team has received your communication and will respond promptly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="btn-hero-outline text-xs px-5 py-2.5 font-bold uppercase tracking-wider"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border/70 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
            Full Name <span className="text-destructive">*</span>
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
            placeholder="Organization name"
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
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Inquiry Subject <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Pump commissioning quotation, emergency support inquiry"
          className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your inquiry or question..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-hero w-full text-xs py-3 font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
