import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast({ title: "Enquiry Sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Ready to discuss your requirements? Reach out for inquiries, quotes, or partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Google Maps Embed */}
          <div className="flex flex-col gap-6">
            <div className="border border-gold overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55418.15817578893!2d77.51!3d29.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb42e1c1d1e29%3A0x1b1b0a1234567890!2sSaharanpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px", filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Enterprises Location - Saharanpur, UP, India"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Mail, label: "Email", value: "premierentp97@gmail.com", href: "mailto:premierentp97@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9997688556", href: "tel:+919997688556" },
                { icon: MapPin, label: "Address", value: "11/2341 Atish Bazan St, Saharanpur-247001, UP", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-gradient-card border border-gold p-4 group hover:shadow-gold transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">{item.label}</span>
                  </div>
                  <p className="text-sm text-foreground font-body leading-snug">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-gradient-card border border-gold p-8 md:p-10">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              <span className="text-gradient-gold">Enquiry</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", required: true },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-body text-muted-foreground mb-2">
                    {field.label} {field.required && <span className="text-primary">*</span>}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required={field.required}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    maxLength={field.id === "name" ? 100 : field.id === "email" ? 255 : 20}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-body text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  maxLength={1000}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:bg-gold-glow transition-colors duration-300 disabled:opacity-60"
              >
                {sending ? "Sending..." : (
                  <>Submit Enquiry <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
