import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo, suburbs } from '@/lib/data';
import { EnquiryForm } from '@/components/enquiry-form';

export const metadata: Metadata = {
  title: 'Contact Elect Home Care',
  description:
    'Get in touch with Elect Home Care. Call 0419 322 955 or send an enquiry. Free in-home consultation on the Mornington Peninsula.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
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
              Get in Touch
            </p>
            <h1 className="font-display text-5xl font-light text-teal sm:text-6xl md:text-7xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">
              Speak directly with Jo-Ann, our founder. No call centres, ever.
              Your free in-home consultation is just a conversation away.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-teal/10 bg-white p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-teal">
                  Contact details
                </h2>
                <div className="mt-6 space-y-5">
                  <a
                    href={contactInfo.phoneHref}
                    className="flex items-center gap-4 text-charcoal/70 transition-colors hover:text-coral"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/5">
                      <Phone className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/50">Phone</p>
                      <p className="font-semibold text-teal">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 text-charcoal/70 transition-colors hover:text-coral"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/5">
                      <Mail className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/50">Email</p>
                      <p className="font-semibold text-teal">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-charcoal/70">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/5">
                      <Clock className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/50">Hours</p>
                      <p className="font-semibold text-teal">Open 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-charcoal/70">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/5">
                      <MapPin className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal/50">Service area</p>
                      <p className="font-semibold text-teal">
                        {suburbs.join(', ')}, VIC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-teal p-8 text-ivory">
                <h3 className="font-display text-xl font-semibold">
                  Free In-Home Consultation
                </h3>
                <p className="mt-2 text-sm text-ivory/80">
                  We come to you, at no cost or obligation, to understand your
                  needs and build a personalised care plan. Available across the
                  Mornington Peninsula.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-teal/10 bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-teal">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">
                Fill in the form below and we&apos;ll be in touch within 24
                hours.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
