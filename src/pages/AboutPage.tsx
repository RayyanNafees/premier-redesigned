import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, Clock, Shield, Users, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Clock, label: "Years of Excellence", value: "17+" },
  { icon: Globe, label: "Global Presence", value: "Worldwide" },
  { icon: Award, label: "Product Categories", value: "15+" },
  { icon: Users, label: "Satisfied Clients", value: "500+" },
];

const values = [
  {
    icon: Shield,
    title: "Quality Commitment",
    description:
      "Adhering to total quality management principles with continuous review and improvement based on performance feedback from customers and production units.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Comprehensive calibration services and preventive maintenance to ensure instruments perform at peak accuracy throughout their lifecycle.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "Occupying the status of a globally recognised company for precision testing instruments in both domestic and international markets.",
  },
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const leaderRef = useRef(null);
  const leaderInView = useInView(leaderRef, { once: true, margin: "-80px" });

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
              About <span className="text-gradient-gold">Premier Enterprises</span>
            </h1>
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl text-lg mb-6">
              Commenced in operation since 2007, Premier Enterprises has made rapid progress to become
              one of the leading designers, manufacturers and suppliers of precision testing instruments
              for the Pulp, Paper and Board industries, alongside exquisite wooden and iron handcrafted
              and laser articles with unique style and designs.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl">
              Today, PE occupies the status of a globally recognised company for these instruments in
              both domestic as well as foreign markets — committed to total quality management principles
              with continuous improvement driven by customer feedback and evolving industry trends.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-gradient-card border border-gold p-6 text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-gradient-gold">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="line-accent mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Our <span className="text-gradient-gold">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-gradient-card border border-gold p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-gold mb-5">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leaderRef} className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="line-accent mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Leadership
            </h2>
            <div className="bg-gradient-card border border-gold p-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-gold flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-2">
                Mohd Aamir
              </h3>
              <p className="text-primary/80 font-body text-sm uppercase tracking-[0.2em] mb-4">
                Managing Director
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-sm max-w-lg mx-auto">
                Leading Premier Enterprises with a vision to deliver world-class precision instruments
                and heritage craftsmanship to a growing global clientele since 2007.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
