export type ServiceCategory =
  | 'Personal Care'
  | 'Home Help'
  | 'Health Support'
  | 'Social & Transport';

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: string;
  image: string;
  shortBenefit: string;
  description: string;
  details: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'companionship',
    title: 'Companionship',
    category: 'Social & Transport',
    icon: 'Heart',
    image: 'https://images.pexels.com/photos/29372692/pexels-photo-29372692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Genuine friendship and conversation',
    description:
      'Our carers are more than helpers — they are companions who share stories, walks, hobbies and laughter, bringing warmth and connection to every visit.',
    details: [
      'Friendly conversation and shared activities',
      'Accompanying walks, outings and appointments',
      'Reading aloud, playing games, sharing hobbies',
      'Emotional support and a familiar, friendly face',
    ],
    benefits: [
      'Reduces loneliness and isolation',
      'Supports mental wellbeing and cognitive health',
      'Builds a trusted, familiar relationship',
    ],
  },
  {
    slug: 'meal-preparation',
    title: 'Meal Preparation',
    category: 'Home Help',
    icon: 'Utensils',
    image: 'https://images.pexels.com/photos/8769731/pexels-photo-8769731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Nutritious, home-cooked meals',
    description:
      'From planning to plating, our carers prepare delicious, balanced meals tailored to dietary needs and personal preferences.',
    details: [
      'Meal planning and grocery shopping',
      'Cooking nutritious, balanced meals',
      'Accommodating dietary requirements',
      'Storing and labelling leftovers safely',
    ],
    benefits: [
      'Ensures proper nutrition and hydration',
      'Saves time and energy',
      'Meals tailored to taste and health needs',
    ],
  },
  {
    slug: 'medication-monitoring',
    title: 'Medication Monitoring',
    category: 'Health Support',
    icon: 'Pill',
    image: 'https://images.pexels.com/photos/7551633/pexels-photo-7551633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Safe, timely medication reminders',
    description:
      'Our trained carers provide gentle reminders and monitoring to ensure medications are taken correctly and on time.',
    details: [
      'Medication reminders and prompts',
      'Monitoring for side effects or concerns',
      'Liaising with pharmacists and GPs',
      'Webster pack and dose-aid support',
    ],
    benefits: [
      'Reduces risk of missed or double doses',
      'Peace of mind for family',
      'Professional oversight and reporting',
    ],
  },
  {
    slug: 'transport-assistance',
    title: 'Transport Assistance',
    category: 'Social & Transport',
    icon: 'Car',
    image: 'https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Safe, friendly transport to appointments',
    description:
      'Door-to-door transport for medical appointments, shopping, social outings and community events — with a friendly carer by your side.',
    details: [
      'Transport to medical and specialist appointments',
      'Shopping trips and errands',
      'Social outings and community events',
      'Assistance getting in and out of vehicles',
    ],
    benefits: [
      'Maintains independence and social connection',
      'Safe, reliable and on time',
      'A familiar companion for every trip',
    ],
  },
  {
    slug: 'personal-care',
    title: 'Personal Care',
    category: 'Personal Care',
    icon: 'User',
    image: 'https://images.pexels.com/photos/7345443/pexels-photo-7345443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Dignified help with daily routines',
    description:
      'Respectful assistance with showering, dressing, grooming and toileting — always preserving dignity and independence.',
    details: [
      'Showering and bathing assistance',
      'Dressing and grooming support',
      'Toileting and continence care',
      'Mobility and transfer assistance',
    ],
    benefits: [
      'Maintains dignity and self-esteem',
      'Reduces risk of falls and injury',
      'Tailored to individual comfort levels',
    ],
  },
  {
    slug: 'light-household-duties',
    title: 'Light Household Duties',
    category: 'Home Help',
    icon: 'Home',
    image: 'https://images.pexels.com/photos/29372733/pexels-photo-29372733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'A clean, tidy, comfortable home',
    description:
      'Keeping the home safe and comfortable with light cleaning, laundry, bed-making and general tidying.',
    details: [
      'Dusting, vacuuming and sweeping',
      'Laundry and ironing',
      'Bed-making and linen changes',
      'Kitchen and bathroom cleaning',
    ],
    benefits: [
      'A safe, hygienic living environment',
      'Reduces fall hazards',
      'More time to enjoy life',
    ],
  },
  {
    slug: 'shopping-errands',
    title: 'Shopping & Errands',
    category: 'Home Help',
    icon: 'ShoppingCart',
    image: 'https://images.pexels.com/photos/8422682/pexels-photo-8422682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Groceries and errands handled',
    description:
      'Whether accompanying you to the shops or doing the run for you, we make sure the pantry and fridge are always stocked.',
    details: [
      'Grocery shopping and delivery',
      'Prescription collection',
      'Banking and bill payments',
      'Accompanied shopping trips',
    ],
    benefits: [
      'Fresh food and essentials always on hand',
      'Staying on top of appointments and tasks',
      'Supports independence at home',
    ],
  },
  {
    slug: 'respite-care',
    title: 'Respite Care',
    category: 'Personal Care',
    icon: 'Clock',
    image: 'https://images.pexels.com/photos/18509794/pexels-photo-18509794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Rest for family carers, care for loved ones',
    description:
      'Giving family carers a well-earned break while ensuring their loved one receives the same quality of care and companionship.',
    details: [
      'Short-term and emergency respite',
      'Overnight and weekend respite',
      'Companionship and personal care',
      'Peace of mind for primary carers',
    ],
    benefits: [
      'Prevents carer burnout',
      'Continuity of quality care',
      'Flexible, on-demand availability',
    ],
  },
  {
    slug: 'monitor-personal-safety',
    title: 'Monitor Personal Safety',
    category: 'Health Support',
    icon: 'ShieldCheck',
    image: 'https://images.pexels.com/photos/7446755/pexels-photo-7446755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Regular check-ins for safety and peace of mind',
    description:
      'Regular visits and check-ins to ensure safety and wellbeing, providing reassurance to clients and families alike.',
    details: [
      'Regular welfare check-ins',
      'Fall risk assessment and prevention',
      'Home safety assessments',
      'Emergency response planning',
    ],
    benefits: [
      'Early detection of health changes',
      'Reassurance for family living away',
      'Rapid response if something is wrong',
    ],
  },
  {
    slug: 'incontinence-care',
    title: 'Incontinence Care',
    category: 'Personal Care',
    icon: 'Droplet',
    image: 'https://images.pexels.com/photos/29372532/pexels-photo-29372532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Sensitive, dignified continence support',
    description:
      'Compassionate, discreet support with continence needs, always preserving dignity and comfort.',
    details: [
      'Continence management and support',
      'Personal hygiene and skin care',
      'Continence aid shopping and supply',
      'Dignified, respectful assistance',
    ],
    benefits: [
      'Maintains dignity and comfort',
      'Prevents skin issues and infection',
      'Discreet, professional care',
    ],
  },
  {
    slug: 'encourage-activities',
    title: 'Encourage Activities',
    category: 'Social & Transport',
    icon: 'Sparkles',
    image: 'https://images.pexels.com/photos/25956900/pexels-photo-25956900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'Staying active, engaged and joyful',
    description:
      'Supporting physical, mental and social activity to keep life vibrant — from gentle exercise to hobbies and community events.',
    details: [
      'Gentle exercise and mobility activities',
      'Hobbies, crafts and games',
      'Community and social group outings',
      'Cognitive stimulation activities',
    ],
    benefits: [
      'Improves physical and mental health',
      'Reduces isolation and boredom',
      'Supports cognitive function',
    ],
  },
  {
    slug: 'appointment-attendance',
    title: 'Appointment Attendance',
    category: 'Health Support',
    icon: 'Calendar',
    image: 'https://images.pexels.com/photos/39192360/pexels-photo-39192360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBenefit: 'A trusted companion at appointments',
    description:
      'We accompany you to medical appointments, take notes, ask the right questions and report back to family.',
    details: [
      'Accompanying to GP and specialist visits',
      'Taking notes and asking questions',
      'Reporting outcomes to family',
      'Coordinating follow-up care',
    ],
    benefits: [
      'Never miss important information',
      'Family stays informed',
      'Advocacy and support at every visit',
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  'Personal Care',
  'Home Help',
  'Health Support',
  'Social & Transport',
];

export const suburbs = [
  'Portsea',
  'Sorrento',
  'Blairgowrie',
  'Rye',
  'Red Hill',
  'Mount Eliza',
  'Mount Martha',
];

export const contactInfo = {
  phone: '0419 322 955',
  phoneHref: 'tel:0419322955',
  email: 'enquiries@electhomecare.com.au',
  abn: '66 656 036 083',
  facebook: 'https://www.facebook.com/electhomecareaustralia',
  instagram: 'https://www.instagram.com/electhomecareaustralia',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export const serviceSlugs = services.map((s) => s.slug);
