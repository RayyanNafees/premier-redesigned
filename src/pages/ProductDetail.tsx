import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Star, StarHalf, CheckCircle2, FileText, Settings, Beaker } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<Star key={i} className="w-4 h-4 fill-primary text-primary" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<StarHalf key={i} className="w-4 h-4 fill-primary text-primary" />);
    } else {
      stars.push(<Star key={i} className="w-4 h-4 text-muted-foreground/30" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

// Product data store — expandable for future products
const productData: Record<string, {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  description: string;
  models: {
    name: string;
    specs: { label: string; value: string }[];
    features: string[];
    standards: string[];
  }[];
  reviews: { author: string; date: string; rating: number; text: string }[];
}> = {
  "beating-freeness-tester": {
    name: "Beating & Freeness Tester",
    image: "https://premierenterprises.co.in/wp-content/uploads/2024/03/free-ness-beating-tester-sr-type.jpg",
    rating: 3.0,
    reviewCount: 1,
    category: "Pulp, Paper & Packaging Lab Testing Equipment",
    description:
      "The Shopper Reigler Type Beating & Freeness Tester measures the drainage capacity of beaten pulp and is universally used to check the progress of the beating process. Available in both Mechanical and Pneumatic models to suit varying laboratory requirements.",
    models: [
      {
        name: "Mechanical Model",
        specs: [
          { label: "Sample", value: "2g Oven Dried" },
          { label: "Consistency", value: "0.2%" },
          { label: "Reproducibility", value: "Approx. 1° SR" },
          { label: "Material", value: "All parts in contact with pulp are non-corrosive" },
        ],
        features: [
          "Plexiglass measuring cylinder (100 sec.) with double graduation on CCM and °SR",
          "Calibrated nozzle and screen plate container grip for easy removal & cleaning",
          "Standard wire mesh fixing and removing attachment",
          "Semi-automatic sealing cone lifting arrangement",
          "Nozzle calibrated according to °SR standard",
        ],
        standards: ["SCAN C19"],
      },
      {
        name: "Pneumatic Model",
        specs: [
          { label: "Pulp Sample Consistency", value: "0.20%" },
          { label: "Pulp Temperature", value: "20°C ± 0.05°C" },
          { label: "Reproducibility", value: "1° SR" },
          { label: "Material", value: "All parts in contact with pulp are non-corrosive" },
          { label: "Pulp Volume", value: "1000 ml" },
          { label: "Graduation", value: "°SR (1000 ml = 0°SR, 0 ml = 100°SR)" },
        ],
        features: [
          "Automatic sealing cone lifting arrangement",
          "Pneumatic arrangement ensures a constant lifting rate for the sealing cone",
          "Drainage expressed as SR number",
        ],
        standards: ["ISO 5267/1", "SCAN C 19:65"],
      },
    ],
    reviews: [
      {
        author: "Premier Enterprises",
        date: "March 27, 2024",
        rating: 3,
        text: "This is a good product.",
      },
    ],
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="text-2xl font-heading text-foreground mb-4">Product Not Found</h1>
          <Link to="/products/pulp-paper-packaging" className="text-primary hover:text-primary/80 text-sm">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-28 px-6 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/products/pulp-paper-packaging"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          {/* Hero: Image + Info */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden border border-border bg-muted/10 rounded-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-primary mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <StarRating rating={product.rating} />
                <span className="text-sm text-muted-foreground font-body">
                  {product.rating.toFixed(2)} out of 5 ({product.reviewCount} review{product.reviewCount !== 1 ? "s" : ""})
                </span>
              </div>

              <div className="h-px bg-border" />

              <p className="text-muted-foreground font-body leading-relaxed">
                {product.description}
              </p>

              <div className="h-px bg-border" />

              <div className="flex flex-wrap gap-2">
                {product.models.map((m) => (
                  <span
                    key={m.name}
                    className="px-3 py-1.5 text-xs font-body uppercase tracking-wider border border-primary/30 text-primary bg-primary/5 rounded-sm"
                  >
                    {m.name}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={`mailto:premierentp97@gmail.com?subject=Quote Request for ${encodeURIComponent(product.name)}&body=${encodeURIComponent(`Hi,\n\nI would like to request a quote for the "${product.name}".\n\nProduct link: ${window.location.origin}/product/${slug}\n\nPlease share pricing and availability details.\n\nThank you.`)}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Request a Quote
                </a>
                <a
                  href={`https://wa.me/919997688556?text=${encodeURIComponent(`Hi, I'm interested in the "${product.name}".\n\nProduct link: ${window.location.origin}/product/${slug}\n\nCould you please share more details and pricing?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-500 font-body text-sm uppercase tracking-wider hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs: Specifications per model + Reviews */}
      <section className="py-16 md:py-24 px-6 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue={product.models[0]?.name || "reviews"} className="w-full">
            <TabsList className="bg-muted/10 border border-border w-full justify-start overflow-x-auto flex-nowrap rounded-none h-auto p-0">
              {product.models.map((m) => (
                <TabsTrigger
                  key={m.name}
                  value={m.name}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-6 py-3 text-xs uppercase tracking-wider font-body"
                >
                  {m.name}
                </TabsTrigger>
              ))}
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-6 py-3 text-xs uppercase tracking-wider font-body"
              >
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>

            {product.models.map((model) => (
              <TabsContent key={model.name} value={model.name} className="mt-10">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Specifications */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Settings className="w-5 h-5" />
                      <h3 className="text-sm font-heading uppercase tracking-wider">Specifications</h3>
                    </div>
                    <div className="space-y-3">
                      {model.specs.map((spec) => (
                        <div key={spec.label} className="flex flex-col gap-1 border-b border-border/50 pb-3">
                          <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">{spec.label}</span>
                          <span className="text-sm text-foreground font-body">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Beaker className="w-5 h-5" />
                      <h3 className="text-sm font-heading uppercase tracking-wider">Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {model.features.map((f, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground font-body leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standards */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <FileText className="w-5 h-5" />
                      <h3 className="text-sm font-heading uppercase tracking-wider">Compliance</h3>
                    </div>
                    <div className="space-y-3">
                      {model.standards.map((s) => (
                        <div key={s} className="px-4 py-3 border border-primary/20 bg-primary/5">
                          <span className="text-sm font-body text-foreground">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="mt-10">
              <div className="space-y-6 max-w-2xl">
                {product.reviews.map((review, i) => (
                  <div key={i} className="border border-border/50 p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-heading text-foreground font-semibold">{review.author}</span>
                      <span className="text-xs text-muted-foreground font-body">{review.date}</span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-sm text-muted-foreground font-body">{review.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
