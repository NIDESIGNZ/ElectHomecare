import type { Metadata } from 'next';
import { Heart, Users, Phone, ArrowRight } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import { EnquiryForm } from '@/components/enquiry-form';

export const metadata: Metadata = {
  title: 'Careers — Join a team where kindness matters',
  description:
    'Join Elect Home Care on the Mornington Peninsula. We are looking for compassionate, professional carers who believe in heartfelt, personalised care.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-midnight py-24 text-ivory">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, #0F5C63 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Careers
          </p>
          <h1 className="font-display text-5xl font-light text-ivory sm:text-6xl md:text-7xl">
            Join a team where
            <br />
            kindness matters
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/70">
            We are looking for compassionate, professional carers who believe in
            heartfelt, personalised care. If that sounds like you, we would love
            to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: 'Heartfelt',
                desc: 'We hire for empathy first. Skills can be taught — kindness cannot.',
              },
              {
                icon: Users,
                title: 'Personal',
                desc: 'You build real relationships with the people you care for.',
              },
              {
                icon: Phone,
                title: 'Supported',
                desc: 'Direct access to Jo-Ann for guidance, support and coordination.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-teal/10 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/5">
                  <v.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-teal">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-light text-teal">
                What we look for
              </h2>
              <ul className="mt-6 space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  Certificate III in Individual Support (or equivalent)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  Current First Aid and CPR certification
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  National Police Check and Working with Children Check
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  Reliable transport and a valid driver&apos;s licence
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  A genuine passion for caring for others
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-teal/10 bg-white p-6 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-teal">
                Express interest
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">
                Send us a message and we&apos;ll be in touch about current
                opportunities.
              </p>
              <div className="mt-6">
                <EnquiryForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
