import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  { name: "Beating & Freeness Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/free-ness-beating-tester-sr-type-300x300.jpg" },
  { name: "Beating and Freeness Tester (Canadian Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/free-ness-beating-tester-300x300.jpg" },
  { name: "Box Compression Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/box-compression-300x300.jpg" },
  { name: "Brightness Meter", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/brightness-meter-300x300.jpg" },
  { name: "Bursting Strength Tester (Micro Processor Based)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/burst-tester-micro-proccesor-bassed-300x300.jpg" },
  { name: "Bursting Strength Tester for Paper / Paper Board", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/burst-tester-manual-300x300.jpg" },
  { name: "Chip Classifier", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/chip-classifier-300x300.jpg" },
  { name: "Circular Punch & Die Cutter 100 CM Square", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/circular-punch-300x300.jpg" },
  { name: "Cobb Sizing Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Cobb-Sizing-Tester-300x300.jpg" },
  { name: "Concora Medium Fluter", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/Concora-Horz-01-300x300.jpg" },
  { name: "Core Pipe Crush Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/Core-crush-1-300x300.jpg" },
  { name: "Disc Refiner", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Refiner-300x300.jpg" },
  { name: "Double Folder Folding Endurance Tester (Schopper Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Folding-Endurance-Tester-Schopper-type-300x300.jpg" },
  { name: "Edge Crush Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Edge-cruh-tester-300x300.jpg" },
  { name: "Fiber Classifier Bauer McNett Type", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/Fiber-Classifier-Mcnett-Type-300x300.jpg" },
  { name: "Fiber Fractionator (Sumerville Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/PULP-FIBRE-FRACTIONATOR-SOMER-VILLE-TYPE-300x300.jpg" },
  { name: "Incline Impact Tester (Conbur Incline Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/incline-impact-tester-300x300.jpg" },
  { name: "Internal Plybond Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/INTERNAL-PLY-BOND-TESTER-WT-300x300.jpg" },
  { name: "Lab Bar Coater", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/barcoter-300x300.jpg" },
  { name: "Pulp Disintegrator", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Image_01-1-300x300.jpg" },
  { name: "Punch & Die Cutter A/4 (Pneumatically Operated)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/a4-cutter-300x300.jpg" },
  { name: "Ring Crush Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/RCT-ECT-300x300.jpg" },
  { name: "Rotary Digester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Rotatory-Digester-300x300.jpg" },
  { name: "Scuff Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Scuff-01-300x300.jpg" },
  { name: "Sheet Former (KCL Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/HAND-SHEET-FORMER-B-300x300.jpg" },
  { name: "Sheet Former (SCA Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/HAND-SHEET-FORMER-SCA-TYPE-300x300.jpg" },
  { name: "Short Span Compression Strength Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/SHORT-SPAN-COMPRESSIION-TESTER-copy-Copy-300x300.jpg" },
  { name: "Smoothness / Roughness & Porosity Tester (Bendsen Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/SMOOTHNESS-POROSITY-TESTER-BENDTSER-TYPE-copy-300x300.jpg" },
  { name: "Stiffness Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Stiffness-Tester-1-300x300.jpg" },
  { name: "Tear Resistance Tester (Elemendorf Type)", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/image_2_copy-300x300.jpg" },
  { name: "Tensile Strength Tester", image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/Tensile-Strenth-Tester-1-300x300.jpg" },
  { name: "Valley Beater", image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Btroo1-300x300.jpg" },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative overflow-hidden bg-gradient-card border border-gold"
    >
      <div className="aspect-square overflow-hidden bg-muted/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-sm font-heading font-semibold text-foreground leading-tight">
          {product.name}
        </h3>
        <div className="mt-2 w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const PulpPaperCategory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section ref={ref} className="pt-24 pb-24 md:pt-28 md:pb-32 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="line-accent mb-6" />
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Pulp, Paper & Packaging{" "}
              <span className="text-gradient-gold">Lab Testing Equipment</span>
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl">
              Precision-engineered instruments for comprehensive pulp, paper, and packaging quality testing — trusted by laboratories worldwide.
            </p>
            <p className="text-muted-foreground/60 font-body text-sm mt-3">
              Showing all {products.length} results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PulpPaperCategory;
