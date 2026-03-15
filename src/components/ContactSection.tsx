import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Ready to discuss your requirements? Reach out to us for inquiries, quotes, or partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: Mail, label: "Email Us", value: "premierentp97@gmail.com", href: "mailto:premierentp97@gmail.com" },
            { icon: Phone, label: "Call Us", value: "+91 9997688556", href: "tel:+919997688556" },
            { icon: MapPin, label: "Location", value: "India", href: "#" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-gradient-card border border-gold p-8 text-center group hover:shadow-gold transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-gold group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.value}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
