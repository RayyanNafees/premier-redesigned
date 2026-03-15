import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Excellence", value: "20+" },
  { icon: Globe, label: "International Reach", value: "Global" },
  { icon: Award, label: "Product Categories", value: "15+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="line-accent mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Craftsmanship Meets <span className="text-gradient-gold">Precision</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Premier Enterprises specializes in manufacturing and supplying Pulp, Paper & Packaging
              Lab Testing Equipment, serving quality assurance needs before mass production across
              national and international markets.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              We also expertise in exquisite Wooden Articles — laser-engraved art, crafted mirror frames,
              photo frames, consoles, lamps, and more — alongside heritage Chainmail Armour and Nautical Articles.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              With two decades of industry experience, we continue to grow through client satisfaction
              and unwavering commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="bg-gradient-card border border-gold p-6 flex items-center gap-5"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-gold">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
