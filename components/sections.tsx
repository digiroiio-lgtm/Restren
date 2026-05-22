import Image from "next/image";
import Link from "next/link";
import { allMarketingPages, projectHighlights } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Restaurant Refurbishment UK
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Premium hospitality fit-out and refurbishment contractor.
          </h1>
          <p className="mt-6 max-w-xl text-zinc-300">
            We deliver restaurant refurbishment, restaurant fit out, takeaway
            fit out, and commercial kitchen contractors services for £20k-£500k
            UK projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-300"
            >
              Request Estimate
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">
            Why premium operators choose us
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>• Fully insured, UK compliant delivery teams</li>
            <li>• Project management from concept to handover</li>
            <li>• Fast-track programmes for trading businesses</li>
            <li>• Turnkey hospitality fit-out solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        Core services
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allMarketingPages.slice(0, 10).map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}`}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-amber-300/50 hover:bg-zinc-900"
          >
            <h3 className="text-lg font-semibold text-white">{service.h1}</h3>
            <p className="mt-2 text-sm text-zinc-400">{service.intro}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ProjectShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        Before-after project showcase
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projectHighlights.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60"
          >
            <Image
              src={project.image}
              alt={`${project.name} hospitality refurbishment result`}
              width={640}
              height={420}
              className="h-52 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-white">{project.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TrustAndTestimonials() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
      <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">
          Trust badges and compliance
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          <li>• Fully insured contractors</li>
          <li>• UK building and food-service compliance</li>
          <li>• Experienced project managers</li>
          <li>• Fast-track delivery teams</li>
          <li>• Turnkey design-and-build capability</li>
        </ul>
      </div>
      <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">
          Client testimonials
        </h2>
        <blockquote className="mt-4 text-sm text-zinc-300">
          “The team delivered our franchise-ready restaurant fit out on
          programme with premium quality throughout.”
        </blockquote>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Operations Director, UK QSR Group
        </p>
        <blockquote className="mt-6 text-sm text-zinc-300">
          “Strong commercial management and clear communication from survey
          through handover.”
        </blockquote>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Hospitality Investor, London
        </p>
      </div>
    </section>
  );
}

export function LeadFormSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="rounded-2xl border border-amber-200/20 bg-gradient-to-r from-zinc-900 to-zinc-800 p-8">
        <h2 className="text-3xl font-semibold text-white">Request estimate</h2>
        <p className="mt-3 text-zinc-300">
          Tell us about your site and we will provide a fast, structured
          response.
        </p>
        <form className="mt-6 grid gap-4 md:grid-cols-2" action="/contact" method="get">
          <input
            required
            name="name"
            placeholder="Name"
            className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500"
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500"
          />
          <input
            name="company"
            placeholder="Company"
            className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500"
          />
          <input
            name="location"
            placeholder="Project location"
            className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500"
          />
          <textarea
            name="scope"
            placeholder="Project scope"
            className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 md:col-span-2"
            rows={4}
          />
          <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-300 md:col-span-2">
            Book Site Visit
          </button>
        </form>
      </div>
    </section>
  );
}
