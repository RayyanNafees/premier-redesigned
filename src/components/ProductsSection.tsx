import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import labEquipment from "@/assets/products/lab-equipment.jpg";
import mirrorFrames from "@/assets/products/mirror-frames.jpg";
import woodenLaser from "@/assets/products/wooden-laser.jpg";
import photoFrames from "@/assets/products/photo-frames.jpg";
import woodenLamps from "@/assets/products/wooden-lamps.jpg";
import candleHolder from "@/assets/products/candle-holder.jpg";
import woodenBoxes from "@/assets/products/wooden-boxes.jpg";
import woodenPartition from "@/assets/products/wooden-partition.jpg";
import chainmailArmor from "@/assets/products/chainmail-armor.jpg";
import nautical from "@/assets/products/nautical.jpg";
import consoleImg from "@/assets/products/console.jpg";
import miscellaneous from "@/assets/products/miscellaneous.jpg";
import rockingChairs from "@/assets/products/rocking-chairs.jpg";
import woodenTrays from "@/assets/products/wooden-trays.jpg";
import khonti from "@/assets/products/khonti.jpg";
import panel from "@/assets/products/panel.jpg";

const products = [
  { name: "Pulp, Paper & Packaging Equipment", image: labEquipment },
  { name: "Mirror Frames", image: mirrorFrames },
  { name: "Wooden Laser Articles", image: woodenLaser },
  { name: "Wooden Photo Frames", image: photoFrames },
  { name: "Wooden Lamps", image: woodenLamps },
  { name: "Candle Holders", image: candleHolder },
  { name: "Decorative Wooden Boxes", image: woodenBoxes },
  { name: "Wooden Partitions", image: woodenPartition },
  { name: "Ancient Armors & Chainmail", image: chainmailArmor },
  { name: "Nautical Articles", image: nautical },
  { name: "Console", image: consoleImg },
  { name: "Miscellaneous", image: miscellaneous },
  { name: "Rocking Chairs", image: rockingChairs },
  { name: "Wooden Trays & Kitchenware", image: woodenTrays },
  { name: "Khonti", image: khonti },
  { name: "Panel", image: panel },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative overflow-hidden bg-gradient-card border border-gold cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2 leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 text-primary text-sm font-body font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View More <ArrowRight className="w-4 h-4" />
        </div>
        <div className="mt-2 w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-24 md:py-32 px-6 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
