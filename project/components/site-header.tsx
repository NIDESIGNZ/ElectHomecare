'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, contactInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Elect Home Care">
            <img
              src="/logo.png"
              alt="Elect Home Care"
              className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-coral',
                  scrolled ? 'text-charcoal' : 'text-white/90'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contactInfo.phoneHref}
              className={cn(
                'hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all md:flex',
                scrolled
                  ? 'bg-teal text-ivory hover:bg-teal-dark'
                  : 'glass-dark text-white hover:bg-white/20'
              )}
            >
              <Phone className="h-4 w-4" />
              {contactInfo.phone}
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={cn(
                'rounded-full p-2 transition-colors lg:hidden',
                scrolled ? 'text-charcoal' : 'text-white'
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[100] transition-all duration-500 lg:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-midnight" onClick={() => setMenuOpen(false)} />
        <div className="relative flex h-full flex-col items-center justify-center gap-2">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-6 text-white"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold text-white transition-all hover:text-coral"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={contactInfo.phoneHref}
            className="mt-8 flex items-center gap-2 text-lg font-semibold text-coral"
          >
            <Phone className="h-5 w-5" />
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
