import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { services, contactInfo } from '@/lib/data';
import { EnquiryForm } from '@/components/enquiry-form';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory py-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, rgba(15, 92, 99, 0.1) 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <nav className="mb-6 flex items-center gap-2 text-sm text-charcoal/50">
                <Link href="/" className="hover:text-coral">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-coral">
                  Services
                </Link>
                <span>/</span>
                <span className="text-teal">{service.title}</span>
              </nav>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
                {service.category}
              </p>
              <h1 className="font-display text-4xl font-light text-teal sm:text-5xl md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-charcoal/70">
                {service.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-ivory-dark py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-teal">
                What we provide
              </h2>
              <ul className="mt-6 space-y-3">
                {service.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10">
                      <Check className="h-3 w-3 text-teal" />
                    </span>
                    <span className="text-charcoal/70">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-teal">
                Why it matters
              </h2>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10">
                      <Check className="h-3 w-3 text-coral" />
                    </span>
                    <span className="text-charcoal/70">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-light text-teal">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-charcoal/70">
                Call Jo-Ann directly on{' '}
                <a
                  href={contactInfo.phoneHref}
                  className="font-semibold text-coral underline"
                >
                  {contactInfo.phone}
                </a>{' '}
                or send an enquiry below. Your free in-home consultation is just
                a conversation away.
              </p>
              <a
                href={contactInfo.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition-colors hover:bg-teal-dark"
              >
                <Phone className="h-5 w-5" />
                Call {contactInfo.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-teal/10 bg-white p-6 shadow-sm">
              <EnquiryForm defaultService={service.slug} compact />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-ivory-dark py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-8">
            <h2 className="mb-8 font-display text-2xl font-semibold text-teal">
              Related services
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group rounded-2xl border border-teal/10 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:border-coral/30"
                >
                  <h3 className="font-display text-lg font-semibold text-teal">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    {r.shortBenefit}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
