'use client';

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Heart, Clock, MapPin, Users, Star, Quote } from 'lucide-react';
import { contactInfo, suburbs, services } from '@/lib/data';
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
import '@/components/scroll-stack.css';

gsap.registerPlugin(ScrollTrigger);

const values = ['Dignity', 'Compassion', 'Reliability', 'Respect', 'Kindness', 'Independence'];

const testimonials = [
  {
    name: 'Margaret, Sorrento',
    text: 'Jo-Ann and her team have been a lifeline for my mother. The care is personal, warm and always professional. We finally have peace of mind.',
    rating: 5,
  },
  {
    name: 'David, Mount Martha',
    text: 'No call centres, no rotating staff — just the same friendly carer who knows Dad by name. The difference is night and day.',
    rating: 5,
  },
  {
    name: 'Susan, Rye',
    text: 'From the first phone call to the in-home consultation, everything was handled with such care and respect. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Peter, Mount Eliza',
    text: 'Elect Home Care gave me my independence back. My carer helps with shopping and appointments but also shares a cup of tea and a chat.',
    rating: 5,
  },
];

const steps = [
  { num: '01', title: 'Call Us', desc: 'Speak directly with Jo-Ann, our founder. No call centres, ever.' },
  { num: '02', title: 'Free In-Home Consultation', desc: 'We visit you at home to understand your needs, at no cost or obligation.' },
  { num: '03', title: 'Personalised Care Plan', desc: 'A tailored plan built around your routine, preferences and goals.' },
  { num: '04', title: 'Care Begins', desc: 'Your dedicated carer starts visits, with ongoing coordination and support.' },
];

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (reducedMotion) return;

      // Hero headline reveal
      gsap.from('.hero-line', {
        yPercent: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.hero-sub', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.3,
        stagger: 0.1,
      });

      // Chapter headings
      gsap.utils.toArray<HTMLElement>('.chapter-heading').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Chapter text reveals
      gsap.utils.toArray<HTMLElement>('.chapter-text').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Parallax layers
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.3');
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Service cards stagger
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Step path draw
      const path = document.querySelector('.step-path path') as SVGPathElement | null;
      if (path && typeof path.getTotalLength === 'function') {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: '.how-it-works',
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        });
      }

      // Step items
      gsap.from('.step-item', {
        opacity: 0,
        x: -40,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.how-it-works',
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      // Suburb chips
      gsap.from('.suburb-chip', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.suburbs-section',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Stats count
      gsap.utils.toArray<HTMLElement>('[data-countup]').forEach((el) => {
        const target = parseInt(el.dataset.countup || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });

      // Testimonials
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 60,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, container);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <div ref={container}>
      {/* CHAPTER 1: OPENING — DAWN HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-midnight">
        {/* Deep teal gradient on the left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, #0A2A2F 0%, #0F5C63 45%, #1A7A82 65%, transparent 100%)',
          }}
        />

        {/* Hero photo fills the right half */}
        <div className="absolute inset-0">
          <Image
            src="/7a07a252-f7f3-4825-bcb7-091c2657c2e2.png"
            alt="A carer sharing a warm moment with a client at home"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Left-to-right veil so text stays legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0A2A2F 0%, #0F5C63cc 38%, #1A7A8266 55%, transparent 75%)',
            }}
          />
        </div>

        {/* Floating particles */}
        {!reducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20 animate-float"
                style={{
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  left: `${Math.random() * 55}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${Math.random() * 4 + 4}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Text content — left column */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-12 lg:py-36">
          <div className="max-w-xl">
            <p className="hero-sub mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gold/90">
              Elect Home Care
            </p>
            <h1 className="font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl md:text-7xl">
              <span className="block overflow-hidden">
                <span className="hero-line inline-block">Supporting</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line inline-block text-gradient-warm">
                  Joyful Independence
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line inline-block">at Home</span>
              </span>
            </h1>
            <p className="hero-sub mt-7 text-lg leading-relaxed text-white/80 md:text-xl">
              Professional, personalised in-home care on the Mornington Peninsula.
              No call centres. Open 24/7. Free in-home consultation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="hero-cta pill-cta pill-cta-primary"
              >
                Free In-Home Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="hero-cta pill-cta pill-cta-ghost text-white"
              >
                <Phone className="h-5 w-5" />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {!reducedMotion && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
              <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 2: A FAMILIAR HOME */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ivory section-pad">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(244, 201, 93, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(242, 132, 92, 0.1) 0%, transparent 50%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <p className="chapter-text mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              A Familiar Home
            </p>
            <h2 className="chapter-heading font-display text-4xl font-light leading-tight text-teal sm:text-5xl md:text-6xl">
              Your home, your routine, your way
            </h2>
            <p className="chapter-text mt-6 max-w-xl text-lg text-charcoal/70">
              There is no place like home. Our carers come to you — bringing
              professional support and warm companionship into the space you
              know and love. We fit around your routine, not the other way
              around.
            </p>
            <p className="chapter-text mt-4 max-w-xl text-lg text-charcoal/70">
              No call centres. No rotating strangers. Just a dedicated carer
              who knows you by name.
            </p>
          </div>
          <div className="relative">
            <div
              data-parallax="0.15"
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, #0F5C63 0%, #1A7A82 40%, #F4C95D 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <p className="mt-4 font-display text-2xl text-white">
                    Heartfelt Care
                  </p>
                </div>
              </div>
            </div>
            <div
              data-parallax="0.3"
              className="absolute -bottom-6 -left-6 rounded-2xl glass p-4 shadow-xl"
            >
              <p className="text-sm font-semibold text-teal">Open 24/7</p>
              <p className="text-xs text-charcoal/60">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: CARE THAT FITS YOUR DAY */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-ivory-dark to-ivory section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="chapter-text mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              Care That Fits Your Day
            </p>
            <h2 className="chapter-heading font-display text-4xl font-light text-teal sm:text-5xl md:text-6xl">
              A day in the life, made easier
            </h2>
            <p className="chapter-text mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">
              From morning routines to evening comfort, our carers are there for
              every part of the day.
            </p>
          </div>

          <ScrollStack
            className="mt-8"
            itemDistance={72}
            itemStackDistance={34}
            stackPosition="18%"
            scaleEndPosition="10%"
            baseScale={0.86}
            itemScale={0.025}
            blurAmount={0}
          >
            {services.slice(0, 8).map((s) => (
              <ScrollStackItem key={s.slug} itemClassName="service-card bg-midnight">
                <div className="relative grid h-full items-end md:grid-cols-[1fr_1.15fr]">
                  <div className="relative z-10 p-7 md:p-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <ServiceIcon name={s.icon} />
                    </div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-coral-light">
                      {s.category}
                    </p>
                    <h3 className="font-display text-3xl font-light text-ivory md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-ivory/70">
                      {s.shortBenefit}
                    </p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-transform hover:translate-x-1"
                    >
                      Explore this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="absolute inset-0 md:static md:h-full">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover opacity-55 md:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/65 to-transparent md:from-transparent md:via-transparent md:to-midnight/10" />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="pill-cta pill-cta-primary"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: MEET JO-ANN */}
      <section className="relative overflow-hidden bg-midnight py-24 text-ivory md:py-32">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, #0F5C63 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div className="relative">
            <div
              data-parallax="0.1"
              className="relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, #0F5C63 0%, #1A7A82 50%, #F4C95D 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                    <span className="font-display text-5xl text-white">JB</span>
                  </div>
                  <p className="mt-4 font-display text-xl text-white">
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
            <p className="chapter-text mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Meet Jo-Ann
            </p>
            <h2 className="chapter-heading font-display text-4xl font-light text-ivory sm:text-5xl">
              A founder who answers the phone
            </h2>
            <div className="mt-6 border-l-2 border-coral pl-6">
              <p className="chapter-text font-display text-xl italic text-gold/90">
                "I started Elect Home Care because I believe care should be
                personal. When you call, I answer. When we visit, we stay. No
                call centres, no strangers — just heartfelt, professional
                care."
              </p>
              <p className="chapter-text mt-2 text-sm text-ivory/60">
                — Jo-Ann Beck, Founder
              </p>
            </div>
            <p className="chapter-text mt-6 text-ivory/70">
              Trained in Memphis, Tennessee with Elect Home Care founders Steve
              and Kelly Chandler, Jo-Ann brings generations of medical roots
              to the Mornington Peninsula. Her grandfather was a GP in Mount
              Eliza — and that legacy of community care lives on in every visit.
            </p>
            <Link
              href="/about"
              className="chapter-text mt-8 inline-flex items-center gap-2 font-semibold text-coral hover:text-coral-light"
            >
              Read Jo-Ann&apos;s story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: HOW IT WORKS */}
      <section className="how-it-works relative overflow-hidden bg-ivory section-pad">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="text-center">
            <p className="chapter-text mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              How It Works
            </p>
            <h2 className="chapter-heading font-display text-4xl font-light text-teal sm:text-5xl md:text-6xl">
              Getting started is simple
            </h2>
          </div>

          {/* Path SVG */}
          <svg
            className="step-path my-12 hidden h-32 w-full md:block"
            viewBox="0 0 800 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 50 Q 200 10, 400 50 T 760 50"
              stroke="#0F5C63"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.3"
            />
          </svg>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="step-item relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-warm text-lg font-bold text-midnight shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-semibold text-teal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 6: ACROSS THE PENINSULA */}
      <section className="suburbs-section relative overflow-hidden bg-gradient-to-b from-ivory to-ivory-dark section-pad">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="chapter-text mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
            Across the Peninsula
          </p>
          <h2 className="chapter-heading font-display text-4xl font-light text-teal sm:text-5xl md:text-6xl">
            Local care, local people
          </h2>
          <p className="chapter-text mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">
            We proudly serve the Mornington Peninsula communities we call home.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {suburbs.map((suburb) => (
              <div
                key={suburb}
                className="suburb-chip group relative overflow-hidden rounded-full border border-teal/20 bg-white px-6 py-3 text-sm font-semibold text-teal shadow-sm transition-all hover:scale-105 hover:border-coral/40 hover:shadow-md"
              >
                <MapPin className="mr-2 inline h-4 w-4 text-coral" />
                {suburb}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-teal py-20 text-ivory">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span
                data-countup="24"
                className="font-display text-5xl font-light text-gold md:text-6xl"
              >
                24
              </span>
              <span className="font-display text-3xl text-gold/70">/7</span>
            </div>
            <p className="mt-2 text-sm text-ivory/70">Always available</p>
          </div>
          <div className="text-center">
            <span
              data-countup="7"
              className="font-display text-5xl font-light text-gold md:text-6xl"
            >
              7
            </span>
            <p className="mt-2 text-sm text-ivory/70">Peninsula suburbs served</p>
          </div>
          <div className="text-center">
            <span
              data-countup="0"
              className="font-display text-5xl font-light text-gold md:text-6xl"
            >
              0
            </span>
            <p className="mt-2 text-sm text-ivory/70">Call centres — ever</p>
          </div>
        </div>
      </section>

      {/* VALUES MARQUEE */}
      <section className="overflow-hidden bg-ivory-dark py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...values, ...values, ...values, ...values].map((v, i) => (
            <span
              key={i}
              className="mx-8 font-display text-3xl font-light text-teal/30"
            >
              {v} <span className="text-coral/40">&bull;</span>
            </span>
          ))}
        </div>
      </section>

      {/* CHAPTER 7: FINALE — TESTIMONIALS */}
      <section className="testimonials-section relative overflow-hidden bg-ivory section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="chapter-text mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              Stories from our community
            </p>
            <h2 className="chapter-heading font-display text-4xl font-light text-teal sm:text-5xl md:text-6xl">
              Trusted by families across the Peninsula
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="testimonial-card relative rounded-2xl border border-teal/10 bg-white p-6 shadow-sm"
              >
                <Quote className="h-8 w-8 text-coral/30" />
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                  {t.text}
                </p>
                <div className="mt-4 flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-teal">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINALE: ENQUIRY */}
      <section className="relative overflow-hidden bg-midnight py-24 text-ivory md:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, #F2845C 0%, transparent 60%), radial-gradient(ellipse at 50% 0%, #0F5C63 0%, transparent 50%)',
          }}
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center md:px-8">
          <h2 className="chapter-heading font-display text-4xl font-light text-ivory sm:text-5xl md:text-6xl">
            Let&apos;s start a conversation
          </h2>
          <p className="chapter-text mt-6 text-lg text-ivory/70">
            Call Jo-Ann directly on{' '}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-coral underline"
            >
              {contactInfo.phone}
            </a>{' '}
            or send an enquiry. Your free in-home consultation is just a
            conversation away.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactInfo.phoneHref}
              className="pill-cta pill-cta-primary"
            >
              <Phone className="h-5 w-5" />
              Call Now
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

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Heart: <Heart className="h-6 w-6" />,
    Utensils: <UtensilsIcon />,
    Pill: <PillIcon />,
    Car: <CarIcon />,
    User: <UserIcon />,
    Home: <HomeIcon />,
    ShoppingCart: <CartIcon />,
    Clock: <Clock className="h-6 w-6" />,
    ShieldCheck: <ShieldIcon />,
    Droplet: <DropletIcon />,
    Sparkles: <SparklesIcon />,
    Calendar: <CalendarIcon />,
  };
  return <>{icons[name] || <Heart className="h-6 w-6" />}</>;
}

function UtensilsIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2" /><path d="M5 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
function PillIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" />
    </svg>
  );
}
function CarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.8 9.8l-1.5-4.5C16.9 4.3 16 3.7 15 3.7H6c-1 0-1.9.6-2.3 1.6L2.5 9.8 1.5 11.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function DropletIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
