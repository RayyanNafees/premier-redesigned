import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.includes("#") && location.pathname === "/") {
      const id = href.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-gradient-gold">
          Premier Enterprises
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isRoute = !l.href.includes("#") || (l.href.includes("#") && l.href.startsWith("/"));
            const isActive =
              l.href === location.pathname ||
              (l.href === "/" && location.pathname === "/");

            if (l.href.startsWith("/#")) {
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-sm font-body text-muted-foreground hover:text-foreground tracking-wider uppercase transition-colors"
                >
                  {l.label}
                </Link>
              );
            }

            return (
              <Link
                key={l.label}
                to={l.href}
                className={`text-sm font-body tracking-wider uppercase transition-colors ${
                  isActive && l.href !== "/"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-sm font-body text-muted-foreground hover:text-foreground tracking-wider uppercase"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
