import type { Metadata } from 'next';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Elect Home Care services, pricing, service areas and how to get started.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    q: 'How do I get started with Elect Home Care?',
    a: 'Simply call Jo-Ann on 0419 322 955. She will arrange a free in-home consultation at a time that suits you, understand your needs, and build a personalised care plan. There is no obligation — the consultation is completely free.',
  },
  {
    q: 'What areas do you service?',
    a: 'We proudly serve the Mornington Peninsula: Portsea, Sorrento, Blairgowrie, Rye, Red Hill, Mount Eliza and Mount Martha. If you are nearby but not listed, please call — we may still be able to help.',
  },
  {
    q: 'Are you open 24/7?',
    a: 'Yes. We are available 24 hours a day, 7 days a week. Whether you need scheduled visits or emergency support, we are here when you need us.',
  },
  {
    q: 'Do you have call centres?',
    a: 'No. When you call Elect Home Care, you speak directly with Jo-Ann Beck, our founder and care coordinator. No call centres, no hold music, no strangers.',
  },
  {
    q: 'How much does in-home care cost?',
    a: 'Our rates are competitive and tailored to the level of care you need. After your free in-home consultation, we provide a clear, transparent quote with no hidden fees. We are happy to discuss options to suit your budget.',
  },
  {
    q: 'Will I always have the same carer?',
    a: 'Yes. We believe in building trusted, familiar relationships. You will have a dedicated carer who knows you by name and understands your routine and preferences.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer twelve services across four categories: Personal Care, Home Help, Health Support and Social & Transport. These include companionship, meal preparation, medication monitoring, transport, respite care, incontinence care and more. See our Services page for the full list.',
  },
  {
    q: 'Can you help with government-funded care packages?',
    a: 'We can work alongside your Home Care Package or NDIS plan. Call Jo-Ann to discuss how we can support your specific package and requirements.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-ivory section-pad">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(15, 92, 99, 0.1) 0%, transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 md:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              FAQs
            </p>
            <h1 className="font-display text-5xl font-light text-teal sm:text-6xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-lg text-charcoal/70">
              Everything you need to know about Elect Home Care. Still have
              questions? Call us on {contactInfo.phone}.
            </p>
          </div>

          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-teal/10 bg-white px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-teal hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-teal p-8 text-center text-ivory">
            <h2 className="font-display text-2xl font-semibold">
              Still have questions?
            </h2>
            <p className="mt-2 text-ivory/80">
              We are happy to help. Call Jo-Ann directly.
            </p>
            <a
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-midnight transition-colors hover:bg-coral-light"
            >
              <Phone className="h-5 w-5" />
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
