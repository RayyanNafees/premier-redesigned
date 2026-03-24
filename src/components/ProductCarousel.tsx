import { useRef, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const products = [
  {
    name: "Beating & Freeness Tester",
    subtitle: "Pulp Testing Equipment",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/free-ness-beating-tester-sr-type.jpg",
    rating: 3,
  },
  {
    name: "Box Compression Tester",
    subtitle: "Packaging Strength Analysis",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/box-compression.jpg",
    rating: 5,
  },
  {
    name: "Bursting Strength Tester",
    subtitle: "Micro Processor Based System",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/burst-tester-micro-proccesor-bassed.jpg",
    rating: 4,
  },
  {
    name: "Brightness Meter",
    subtitle: "Optical Quality Measurement",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/brightness-meter.jpg",
    rating: 5,
  },
  {
    name: "Cobb Sizing Tester",
    subtitle: "Water Absorption Testing",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Cobb-Sizing-Tester.jpg",
    rating: 4,
  },
  {
    name: "Concora Medium Fluter",
    subtitle: "Corrugation Lab Equipment",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/Concora-Horz-01.jpg",
    rating: 5,
  },
  {
    name: "Core Pipe Crush Tester",
    subtitle: "Compression Resistance Testing",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/Core-crush-1.jpg",
    rating: 4,
  },
  {
    name: "Disc Refiner",
    subtitle: "Pulp Refining Equipment",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/04/Refiner.jpg",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating
            ? "fill-primary text-primary"
            : "fill-muted text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="relative bg-card overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={product.name} className="basis-full">
              <div className="relative w-full flex flex-col">
                {/* Product image — clean, no overlay */}
                <div className="relative h-[350px] md:h-[450px] flex items-center justify-center bg-background">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto max-w-full object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Info bar — opaque strip at the bottom */}
                <div className="bg-card border-t border-border">
                  <div className="max-w-7xl mx-auto px-8 md:px-16 py-5">
                    <AnimatePresence mode="wait">
                      {current === index && (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        >
                          <div className="flex items-center gap-6">
                            <div className="h-8 w-0.5 bg-primary hidden md:block" />
                            <div>
                              <p className="text-primary/90 text-xs font-body font-semibold uppercase tracking-[0.25em] mb-1">
                                {product.subtitle}
                              </p>
                              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground leading-tight">
                                {product.name}
                              </h2>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <StarRating rating={product.rating} />
                            <a
                              href="#products"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
                            >
                              View Details
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center bg-card/60 backdrop-blur-sm border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center bg-card/60 backdrop-blur-sm border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
