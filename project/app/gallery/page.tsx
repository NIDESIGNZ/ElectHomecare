import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A glimpse into the warmth and connection of everyday life with Elect Home Care on the Mornington Peninsula.',
  alternates: { canonical: '/gallery' },
};

const galleryItems = [
  { title: 'Morning Tea', desc: 'Sharing a cuppa and a chat', color: 'from-teal to-teal-light' },
  { title: 'Garden Walk', desc: 'Staying active in the fresh air', color: 'from-coral to-gold' },
  { title: 'Meal Time', desc: 'Home-cooked and shared together', color: 'from-gold to-coral-light' },
  { title: 'Companionship', desc: 'Stories, laughter and connection', color: 'from-teal-light to-teal' },
  { title: 'Community Outing', desc: 'Staying connected to the Peninsula', color: 'from-coral-light to-gold' },
  { title: 'Personal Care', desc: 'Dignified support, every day', color: 'from-teal to-midnight' },
  { title: 'Transport', desc: 'Safe, friendly trips to appointments', color: 'from-gold-light to-coral' },
  { title: 'Activities', desc: 'Keeping mind and body engaged', color: 'from-midnight to-teal' },
  { title: 'Respite', desc: 'Rest for carers, care for loved ones', color: 'from-teal-dark to-teal-light' },
];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-ivory section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
              Gallery
            </p>
            <h1 className="font-display text-5xl font-light text-teal sm:text-6xl md:text-7xl">
              Moments of heartfelt care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">
              A glimpse into the warmth and connection of everyday life with
              Elect Home Care.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
