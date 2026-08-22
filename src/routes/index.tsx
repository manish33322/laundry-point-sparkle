import { createFileRoute } from "@tanstack/react-router";
import {
  Shirt,
  Sparkles,
  Footprints,
  Luggage,
  WashingMachine,
  Sofa,
  Wind,
  Layers,
  Truck,
  Clock,
  Leaf,
  BadgeCheck,
} from "lucide-react";

import heroImage from "@/assets/hero-laundry.jpg";
import whyImage from "@/assets/why-us.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Laundry Point | Doorstep Laundry & Dry Cleaning" },
      {
        name: "description",
        content:
          "The Laundry Point offers premium laundry, dry cleaning, steam ironing, shoe and sofa cleaning with free doorstep pickup and delivery.",
      },
      { property: "og:title", content: "The Laundry Point | Doorstep Laundry & Dry Cleaning" },
      {
        property: "og:description",
        content:
          "Free pickup and delivery laundry, dry cleaning and steam ironing service you can trust.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    points: ["72 hrs turnaround", "Regular perc dry-cleaning", "Stain removal", "Premium steam ironing", "Eco-friendly individual packing"],
  },
  {
    icon: Shirt,
    title: "Wash & Iron",
    points: ["72 hrs turnaround", "Wash & dry", "Stain removal", "Eco friendly packing", "Doorstep pickup & delivery"],
  },
  {
    icon: Layers,
    title: "Wash & Fold",
    points: ["48 hrs turnaround", "Wash, dry & fold", "Fabric conditioner", "Combined eco packing", "Doorstep pickup & delivery"],
  },
  {
    icon: Wind,
    title: "Steam Ironing",
    points: ["24 hrs turnaround", "Cushioning to avoid wrinkles", "Premium steam ironing", "On demand hanger delivery"],
  },
  {
    icon: Footprints,
    title: "Shoe Laundry",
    points: ["48 hrs turnaround", "Deep clean & deodorise", "Stain removal", "Polish & finish"],
  },
  {
    icon: Luggage,
    title: "Luggage Laundry",
    points: ["48 hrs turnaround", "Interior & exterior cleaning", "Stain removal", "Eco friendly packing"],
  },
  {
    icon: Sofa,
    title: "Sofa Cleaning",
    points: ["Sofa dusting", "Vacuum cleaning", "Pre-conditioning fabric care", "On-site drying & processing"],
  },
  {
    icon: WashingMachine,
    title: "Carpet Cleaning",
    points: ["72 hrs turnaround", "Carpet dusting", "Vacuum cleaning", "Poly wrap packing"],
  },
];

const usps = [
  { icon: Truck, title: "Free Pickup & Delivery", text: "We collect and return your clothes at your doorstep, at your chosen time slot." },
  { icon: Clock, title: "On-Time Promise", text: "Fast turnaround from 24 to 96 hours depending on the service you pick." },
  { icon: Leaf, title: "Eco-Friendly Process", text: "Gentle detergents, individual packing and fabric-safe cleaning technology." },
  { icon: BadgeCheck, title: "Quality Checked", text: "Every garment passes a multi-point inspection before it reaches you." },
];

const steps = [
  { n: "01", title: "Schedule a pickup", text: "Call or fill the form and pick a convenient time slot." },
  { n: "02", title: "We collect & clean", text: "Your garments are tagged, treated and cleaned at our facility." },
  { n: "03", title: "Fresh delivery", text: "Neatly packed clothes are delivered back to your doorstep." },
];

const pricing = [
  { name: "Wash & Fold", price: "₹79", unit: "per kg" },
  { name: "Wash & Iron", price: "₹99", unit: "per kg" },
  { name: "Steam Ironing", price: "₹15", unit: "per piece" },
  { name: "Dry Cleaning", price: "₹149", unit: "onwards" },
];

const testimonials = [
  { name: "Rinku Kumari", text: "As a working mother I already have a jam packed schedule everyday. The Laundry Point helps me out a lot with their reliable service." },
  { name: "Sonu Yadav", text: "My kids love cricket, because of which they ruin their clothes everyday. Laundry by KG from The Laundry Point solved this problem for me." },
  { name: "Amit Ranjan", text: "Pickup was on time, clothes came back crisp and individually packed. Easily the best laundry service in the area." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h1 className="font-display text-4xl leading-tight font-bold md:text-5xl">
                Best Laundry and Dry Cleaning Service at your Door-Step
              </h1>
              <p className="mt-5 max-w-md text-ink-foreground/75">
                The Laundry Point picks up, cleans and delivers your clothes with
                premium care — so you never have to think about laundry day again.
              </p>
              <p className="mt-4 text-sm italic text-primary">
                Trusted by 10,000+ happy families
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  Schedule FREE Pick-up
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-ink-foreground/30 px-7 py-3 text-sm font-semibold transition-colors hover:bg-ink-foreground/10"
                >
                  View Services
                </a>
              </div>
            </div>
            <img
              src={heroImage}
              alt="Freshly cleaned white shirt, pink tie and polished leather shoes"
              width={1600}
              height={1008}
              className="rounded-2xl object-cover shadow-soft"
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-pad bg-muted">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              What we do
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-bold md:text-4xl">
              Our Best Services For You
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Leather cleaning · Stain removal · Collar cuff cleaning · Fabric softener ·
              Fabric perfume · Hanger delivery · Starching
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="section-pad">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
              How It Works
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl bg-muted p-8">
                  <span className="font-display text-4xl font-bold text-primary/30">{s.n}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="about" className="section-pad bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
            <img
              src={whyImage}
              alt="The Laundry Point staff delivering fresh laundry to a customer"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-2xl object-cover shadow-soft"
            />
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Why The Laundry Point?
              </h2>
              <p className="mt-4 text-ink-foreground/75">
                We combine modern machinery, fabric-safe chemistry and trained staff to
                give your wardrobe the care it deserves — with the convenience of
                doorstep service.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {usps.map((u) => (
                  <div key={u.title}>
                    <u.icon className="size-6 text-primary" />
                    <h3 className="mt-3 font-display text-base font-semibold">{u.title}</h3>
                    <p className="mt-1 text-sm text-ink-foreground/70">{u.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section-pad">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
              Simple, Honest Pricing
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              No hidden charges. Pickup and delivery always free.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pricing.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-border p-8 text-center transition-shadow hover:shadow-soft"
                >
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="mt-4 font-display text-4xl font-bold text-primary">{p.price}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-pad bg-muted">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
              Client Love
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="rounded-2xl bg-card p-8 shadow-soft">
                  <p className="text-sm text-muted-foreground">"{t.text}"</p>
                  <footer className="mt-5 font-display font-semibold">{t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise */}
        <section id="franchise" className="section-pad">
          <div className="mx-auto max-w-4xl rounded-3xl bg-brand px-6 py-14 text-center text-primary-foreground shadow-soft">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Own a The Laundry Point Franchise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
              Low investment, complete setup support, training and marketing help. Build
              a profitable laundry business in your city with us.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm font-semibold text-ink-foreground transition-transform hover:scale-105"
            >
              Enquire Now
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-pad bg-muted">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                Book a free pickup or ask us anything — we usually reply within an hour.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li><strong>Phone:</strong> +91 99999 99999</li>
                <li><strong>Email:</strong> hello@thelaundrypoint.com</li>
                <li><strong>Hours:</strong> Mon–Sun, 8:00 AM – 9:00 PM</li>
              </ul>
            </div>
            <form
              className="rounded-2xl bg-card p-6 shadow-soft"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4">
                <input
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  placeholder="Pickup address"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us what needs cleaning"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Schedule FREE Pick-up
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
