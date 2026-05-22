import Link from "next/link";
import { site } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121212]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-100"
        >
          {site.name}
        </Link>
        <nav className="hidden gap-5 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0e0e0e]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-zinc-400 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-semibold text-zinc-100">{site.legalName}</p>
          <p>
            {site.address.street}, {site.address.city} {site.address.postcode}
          </p>
        </div>
        <div>
          <p>Email: {site.email}</p>
          <p>Phone: {site.phone}</p>
        </div>
        <div className="md:text-right">
          <p>Fully insured • UK compliant • Turnkey delivery</p>
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCta() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
      <Link
        href="/contact"
        className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-amber-300"
      >
        Book Site Visit
      </Link>
      <a
        href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
        className="rounded-full border border-white/20 bg-black/90 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800"
      >
        WhatsApp CTA
      </a>
    </div>
  );
}
