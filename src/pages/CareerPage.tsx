import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const responsibilities = [
  "Understand PE products from a technical and functional perspective and present to prospective clients",
  "Work with customers to understand requirements and identify solutions that meet their needs",
  "Ensure all customer inquiries are documented and responded to in a timely manner",
  "Build trust with prospects and maintain relationships with existing clients",
  "Identify new business opportunities in untapped regions globally",
  "Interact with customers to gain market insight and spot trends",
  "Generate leads, opportunities, orders, and contracts effectively",
  "Develop sales plan activities by understanding customer-specific needs",
  "Set targets to drive an increase in national and international sales and revenue",
  "Collaborate with Engineering, Production, Finance, and Logistics teams",
  "Resolve customer complaints with expert team support",
  "Ensure timely and accurate reporting of customer data in CRM",
];

const CareerPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Application Submitted", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", age: "", gender: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-gradient-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="line-accent mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Join <span className="text-gradient-gold">Our Team</span>
            </h1>
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl text-lg">
              At Premier Enterprises, our team of experts collaborate with a shared objective of
              developing cutting-edge technologies that fulfil our customers' instrumentation needs.
              We are actively seeking passionate individuals ready to tackle projects that make a
              real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Position */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gradient-card border border-gold p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-gold">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Marketing Manager
                  </h2>
                  <p className="text-primary/80 font-body text-sm uppercase tracking-[0.2em]">
                    Full-Time · Saharanpur, India
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Premier Enterprises is rapidly growing its core business, employees, infrastructure
                and products to meet customer demands. We are hiring a Marketing Manager who will play
                a strategic role in ensuring that our marketing efforts communicate a clear, consistent
                and professional image of the company.
              </p>

              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Key Responsibilities
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="line-accent mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Apply <span className="text-gradient-gold">Now</span>
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              Fill out the form below to submit your application.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-card border border-gold p-8 md:p-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="25"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about yourself and why you'd be a great fit..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;
