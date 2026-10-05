'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 p-2 md:hidden">
      <a
        href={contactInfo.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-teal py-3 text-sm font-semibold text-ivory shadow-lg"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-coral py-3 text-sm font-semibold text-midnight shadow-lg"
      >
        <MessageCircle className="h-4 w-4" />
        Enquire
      </a>
    </div>
  );
}
