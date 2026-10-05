import Link from 'next/link';
import { Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';
import { navLinks, contactInfo, suburbs, services } from '@/lib/data';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-ivory">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/50 to-midnight" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-3 group" aria-label="Elect Home Care">
              <img
                src="/logo.png"
                alt="Elect Home Care"
                className="h-12 w-auto object-contain brightness-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="mt-3 text-sm text-ivory/70">
              Professional Service with Heartfelt Care. Supporting joyful
              independence at home across the Mornington Peninsula.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-coral"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-coral"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold/80">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ivory/70 transition-colors hover:text-coral"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold/80">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-ivory/70 transition-colors hover:text-coral"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-coral"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-coral"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ivory/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Serving {suburbs.join(', ')}, Mornington Peninsula, VIC
                </span>
              </li>
              <li className="text-xs text-ivory/50">ABN {contactInfo.abn}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Elect Home Care. All rights
            reserved. ABN {contactInfo.abn}.
          </p>
          <p>
            Designed and Developed by{' '}
            <a
              href="https://wbhdigitalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold/90 transition-colors hover:text-coral underline underline-offset-2"
            >
              WBH Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
