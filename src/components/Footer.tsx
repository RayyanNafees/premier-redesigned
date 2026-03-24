const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} Premier Enterprises. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Home", "Products", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l === "Home" ? "" : l.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground font-body uppercase tracking-wider transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
