import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import labEquipment from "@/assets/products/lab-equipment.jpg";
import mirrorFrames from "@/assets/products/mirror-frames.jpg";
import woodenLaser from "@/assets/products/wooden-laser.jpg";
import photoFrames from "@/assets/products/photo-frames.jpg";
import woodenLamps from "@/assets/products/wooden-lamps.jpg";
import candleHolder from "@/assets/products/candle-holder.jpg";
import woodenBoxes from "@/assets/products/wooden-boxes.jpg";
import chainmailArmor from "@/assets/products/chainmail-armor.jpg";
import nautical from "@/assets/products/nautical.jpg";
import rockingChairs from "@/assets/products/rocking-chairs.jpg";
import woodenTrays from "@/assets/products/wooden-trays.jpg";

const carouselItems = [
  {
    name: "Pulp, Paper & Packaging Equipment",
    subtitle: "Precision Lab Testing Instruments",
    image: labEquipment,
    link: "/products/pulp-paper-packaging",
  },
  {
    name: "Mirror Frames",
    subtitle: "Handcrafted Decorative Elegance",
    image: mirrorFrames,
  },
  {
    name: "Wooden Laser Articles",
    subtitle: "Intricate Laser-Cut Artistry",
    image: woodenLaser,
  },
  {
    name: "Wooden Photo Frames",
    subtitle: "Timeless Memory Keepers",
    image: photoFrames,
  },
  {
    name: "Wooden Lamps",
    subtitle: "Ambient Lighting Masterpieces",
    image: woodenLamps,
  },
  {
    name: "Candle Holders",
    subtitle: "Ornamental Accent Pieces",
    image: candleHolder,
  },
  {
    name: "Decorative Wooden Boxes",
    subtitle: "Heritage Storage Solutions",
    image: woodenBoxes,
  },
  {
    name: "Ancient Armors & Chainmail",
    subtitle: "Historical Replica Collectibles",
    image: chainmailArmor,
  },
  {
    name: "Nautical Articles",
    subtitle: "Maritime-Inspired Décor",
    image: nautical,
  },
  {
    name: "Rocking Chairs",
    subtitle: "Classic Comfort Seating",
    image: rockingChairs,
  },
  {
    name: "Wooden Trays & Kitchenware",
    subtitle: "Artisanal Serving Essentials",
    image: woodenTrays,
  },
];

const ProductCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="line-accent mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Featured <span className="text-gradient-gold">Categories</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto text-sm">
            Explore our diverse range of precision instruments and handcrafted heritage products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {carouselItems.map((item, index) => (
                <CarouselItem
                  key={item.name}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <CarouselCard item={item} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary h-10 w-10" />
              <CarouselNext className="static translate-y-0 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary h-10 w-10" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

const CarouselCard = ({
  item,
  index,
}: {
  item: (typeof carouselItems)[0];
  index: number;
}) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden bg-gradient-card border border-gold h-[380px] cursor-pointer"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
        <p className="text-primary/80 text-xs font-body font-semibold uppercase tracking-[0.2em] mb-1.5">
          {item.subtitle}
        </p>
        <h3 className="text-xl font-heading font-bold text-foreground leading-tight mb-3">
          {item.name}
        </h3>
        <div className="flex items-center gap-2 text-primary text-sm font-body font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Explore <ArrowRight className="w-4 h-4" />
        </div>
        <div className="mt-3 w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );

  if (item.link) {
    return <Link to={item.link}>{content}</Link>;
  }
  return content;
};

export default ProductCarousel;
