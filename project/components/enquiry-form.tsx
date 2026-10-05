'use client';

import { useState } from 'react';
import { Check, Loader2, Send } from 'lucide-react';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface EnquiryFormProps {
  defaultService?: string;
  compact?: boolean;
}

export function EnquiryForm({ defaultService, compact }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const newErrors: Record<string, string> = {};
    if (!data.get('name')) newErrors.name = 'Please enter your name';
    if (!data.get('email') && !data.get('phone'))
      newErrors.contact = 'Please provide an email or phone number';
    if (data.get('email') && !/\S+@\S+\.\S+/.test(data.get('email') as string))
      newErrors.email = 'Please enter a valid email';

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-teal/5 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-ivory">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-teal">
          Thank you for reaching out
        </h3>
        <p className="max-w-md text-charcoal/70">
          We have received your enquiry and will be in touch within 24 hours.
          For urgent matters, please call us directly on{' '}
          <a
            href="tel:0419322955"
            className="font-semibold text-coral underline"
          >
            0419 322 955
          </a>
          .
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus('idle')}
          className="mt-2"
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" placeholder="Your full name" />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Your email address" />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service</Label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService || ''}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preference">Contact Preference</Label>
        <select
          id="preference"
          name="preference"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="phone-asap">Phone me as soon as possible</option>
          <option value="morning">Phone — Morning</option>
          <option value="afternoon">Phone — Afternoon</option>
          <option value="evening">Phone — Evening</option>
          <option value="email">Email me</option>
        </select>
      </div>

      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Tell us a bit about what you need..."
            rows={4}
          />
        </div>
      )}

      {errors.contact && (
        <p className="text-sm text-destructive">{errors.contact}</p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-teal py-6 text-base font-semibold text-ivory hover:bg-teal-dark"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Enquiry
          </>
        )}
      </Button>

      {status === 'error' && (
        <p className="text-center text-sm text-destructive">
          Something went wrong. Please call us on 0419 322 955.
        </p>
      )}
    </form>
  );
}
