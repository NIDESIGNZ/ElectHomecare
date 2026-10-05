import type { Metadata } from 'next';
import { contactInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Elect Home Care collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="bg-ivory section-pad">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="font-display text-4xl font-light text-teal sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-charcoal/50">
            Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="mt-10 space-y-8 text-charcoal/70">
            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                1. Introduction
              </h2>
              <p className="mt-2">
                Elect Home Care (ABN {contactInfo.abn}) is committed to
                protecting your privacy. This policy explains how we collect,
                use and safeguard your personal information in accordance with
                the Privacy Act 1988 and the Australian Privacy Principles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                2. Information we collect
              </h2>
              <p className="mt-2">
                We collect information you provide directly, including your
                name, contact details, service requirements and health
                information relevant to your care. We may also collect
                information from third parties such as your GP or family members
                with your consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                3. How we use your information
              </h2>
              <p className="mt-2">We use your information to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Provide and coordinate your care services</li>
                <li>Communicate with you about your care</li>
                <li>Liaise with health professionals and family members</li>
                <li>Meet our legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                4. Information sharing
              </h2>
              <p className="mt-2">
                We do not sell or share your personal information with third
                parties for marketing. We may share information with your
                health care providers or family members only with your consent,
                or where required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                5. Data security
              </h2>
              <p className="mt-2">
                We take reasonable steps to protect your personal information
                from unauthorised access, modification or disclosure. Access is
                limited to authorised staff who need it to provide your care.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                6. Your rights
              </h2>
              <p className="mt-2">
                You have the right to access, correct or request the deletion of
                your personal information. To do so, please contact us on{' '}
                {contactInfo.phone} or {contactInfo.email}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-teal">
                7. Contact us
              </h2>
              <p className="mt-2">
                If you have any questions about this policy or how we handle
                your information, please contact us:
              </p>
              <p className="mt-2">
                Phone: {contactInfo.phone}
                <br />
                Email: {contactInfo.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
