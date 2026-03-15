import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import labEquipment from "@/assets/products/lab-equipment.jpg";
import mirrorFrames from "@/assets/products/mirror-frames.jpg";
import woodenLaser from "@/assets/products/wooden-laser.jpg";
import chainmailArmor from "@/assets/products/chainmail-armor.jpg";
import nautical from "@/assets/products/nautical.jpg";
import woodenLamps from "@/assets/products/wooden-lamps.jpg";

const products = [
  { name: "Lab Testing Equipment", desc: "Pulp, Paper & Packaging instruments", image: labEquipment },
  { name: "Mirror Frames", desc: "Hand-crafted wooden mirror frames", image: mirrorFrames },
  { name: "Wooden Laser Articles", desc: "Precision engraved decorative art", image: woodenLaser },
  { name: "Chainmail & Armour", desc: "Heritage medieval armour pieces", image: chainmailArmor },
  { name: "Nautical Articles", desc: "Vintage brass instruments & décor", image: nautical },
  { name: "Wooden Lamps", desc: "Artisan crafted ambient lighting", image: woodenLamps },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-gradient-card border border-gold cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground font-body">{product.desc}</p>
        <div className="mt-3 w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-24 md:py-32 px-6 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            From precision lab instruments to handcrafted heritage pieces — excellence in every category.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
