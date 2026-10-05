import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Heart, Award, Users, MapPin } from 'lucide-react';
import { contactInfo, suburbs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Elect Home Care',
  description:
    'Meet Jo-Ann Beck, founder of Elect Home Care. Personalised, professional in-home care on the Mornington Peninsula — no call centres, ever.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight py-24 text-ivory">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, #0F5C63 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Our Story
          </p>
          <h1 className="font-display text-5xl font-light text-ivory sm:text-6xl md:text-7xl">
            Professional Service
            <br />
            with Heartfelt Care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/70">
            Elect Home Care was founded on a simple belief: care should be
            personal, local and delivered with genuine warmth.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, #0F5C63 0%, #1A7A82 50%, #F4C95D 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-end justify-center pb-12">
                <div className="text-center">
                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                    <span className="font-display text-6xl text-white">JB</span>
                  </div>
                  <p className="mt-6 font-display text-2xl text-white">
                    Jo-Ann Beck
                  </p>
                  <p className="text-sm text-gold/80">
                    Founder & Care Coordinator
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl font-light text-teal">
              A legacy of care
            </h2>
            <p className="mt-6 text-lg text-charcoal/70">
              Jo-Ann Beck founded Elect Home Care after training in Memphis,
              Tennessee with Steve and Kelly Chandler, the original founders of
              Elect Home Care. She brought their philosophy of heartfelt,
              personalised care to the Mornington Peninsula.
            </p>
            <p className="mt-4 text-lg text-charcoal/70">
              Care runs in the family. Jo-Ann&apos;s grandfather was a GP in
              Mount Eliza — and generations of medical roots inform every
              decision we make. When you call, Jo-Ann answers. When we visit, we
              stay. No call centres, no rotating strangers.
            </p>
            <div className="mt-8 border-l-2 border-coral pl-6">
              <p className="font-display text-xl italic text-teal">
                "I believe everyone deserves to stay in their own home, with
                dignity and independence. That&apos;s not just our service —
                it&apos;s our promise."
              </p>
              <p className="mt-2 text-sm text-charcoal/50">— Jo-Ann Beck</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-dark py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-center font-display text-4xl font-light text-teal">
            What we stand for
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: 'Dignity',
                desc: 'We respect every client&apos;s independence, preferences and privacy.',
              },
              {
                icon: Award,
                title: 'Professionalism',
                desc: 'Trained, vetted carers who take pride in the quality of their work.',
              },
              {
                icon: Users,
                title: 'Personal',
                desc: 'No call centres. You speak with Jo-Ann and know your carer by name.',
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/5">
                  <v.icon className="h-7 w-7 text-teal" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-teal">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <MapPin className="mx-auto h-10 w-10 text-coral" />
          <h2 className="mt-4 font-display text-3xl font-light text-teal">
            Proudly local
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            We serve the Mornington Peninsula communities we call home:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {suburbs.map((s) => (
              <span
                key={s}
                className="rounded-full border border-teal/20 bg-white px-5 py-2 text-sm font-semibold text-teal"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-20 text-ivory">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-light text-ivory md:text-4xl">
            Let&apos;s talk about your care needs
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactInfo.phoneHref}
              className="pill-cta pill-cta-primary"
            >
              <Phone className="h-5 w-5" />
              Call {contactInfo.phone}
            </a>
            <Link href="/contact" className="pill-cta pill-cta-ghost text-white">
              <ArrowRight className="h-5 w-5" />
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
