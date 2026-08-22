import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold">The Laundry Point</h3>
          <p className="mt-3 text-sm text-ink-foreground/70">
            Doorstep laundry, dry cleaning and steam ironing with free pickup and
            delivery. Fresh clothes, every single time.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#contact" aria-label="Facebook" className="rounded-full bg-ink-foreground/10 p-2">
              <Facebook className="size-4" />
            </a>
            <a href="#contact" aria-label="Instagram" className="rounded-full bg-ink-foreground/10 p-2">
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#franchise">Franchise</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex gap-2"><Phone className="size-4 shrink-0 text-primary" /> +91 99999 99999</li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 text-primary" /> hello@thelaundrypoint.com</li>
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 text-primary" /> Main Road, Your City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-5 text-center text-xs text-ink-foreground/60">
        © {new Date().getFullYear()} The Laundry Point. All rights reserved.
      </div>
    </footer>
  );
}
