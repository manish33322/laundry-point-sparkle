import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-primary-foreground shadow-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-background text-primary font-display text-lg font-bold">
            LP
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">
              The Laundry Point
            </span>
            <span className="block text-[11px] tracking-[0.18em] uppercase opacity-90">
              Laundry &amp; Dry Cleaning
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-opacity hover:opacity-75">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919999999999"
          className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          <Phone className="size-4" /> Call Now
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-primary-foreground/20 bg-ink px-4 pb-4 text-ink-foreground lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-foreground/10 py-3 text-sm uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
