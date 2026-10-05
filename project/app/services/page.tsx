import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, serviceCategories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive in-home care services on the Mornington Peninsula: personal care, home help, health support, social and transport assistance.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-ivory section-pad">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(244, 201, 93, 0.15) 0%, transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              Our Services
            </p>
            <h1 className="font-display text-5xl font-light text-teal sm:text-6xl md:text-7xl">
              Care that fits your life
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">
              Twelve specialised services, delivered with warmth and
              professionalism. Choose what you need — we tailor everything to
              you.
            </p>
          </div>

          {/* Category sections */}
          {serviceCategories.map((category) => (
            <div key={category} className="mt-16">
              <h2 className="mb-6 font-display text-2xl font-semibold text-teal">
                {category}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.category === category)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group relative overflow-hidden rounded-2xl border border-teal/10 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-coral/30"
                    >
                      <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-teal">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal/60">
                        {s.shortBenefit}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral transition-transform group-hover:translate-x-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
