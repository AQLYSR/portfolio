import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['portrait', 'scenery', 'food', 'street', 'travel']),
    image: z.string(),
    alt: z.string().optional().default(''),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

const home = defineCollection({
  type: 'data',
  schema: z.object({
    heading: z.string(),
    tagline: z.string(),
    description: z.string(),
    primaryButtonText: z.string(),
    primaryButtonLink: z.string().optional().default('/gallery'),
    secondaryButtonText: z.string(),
    secondaryButtonLink: z.string().optional().default('/contact'),
    heroImage: z.string(),
    heroImageAlt: z.string().optional().default(''),
    sideImageTop: z.string(),
    sideImageTopAlt: z.string().optional().default(''),
    sideImageBottom: z.string(),
    sideImageBottomAlt: z.string().optional().default(''),
  }),
});

const about = defineCollection({
  type: 'data',
  schema: z.object({
    heading: z.string(),
    intro: z.string(),
    paragraph1: z.string(),
    paragraph2: z.string(),
    buttonText: z.string(),
    photo: z.string(),
    photoAlt: z.string().optional().default(''),
  }),
});

const contact = defineCollection({
  type: 'data',
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    instagram: z.string().optional().default(''),
    tiktok: z.string().optional().default(''),
    youtube: z.string().optional().default(''),
    whatsapp: z.string().optional().default(''),
  }),
});

const howItWorks = defineCollection({
  type: 'data',
  schema: z.object({
    stepNumber: z.number(),
    title: z.string(),
    description: z.string(),
    icon: z.enum([
      'camera', 'mail', 'phone', 'pin', 'suitcase', 'mountain',
      'fork', 'mushroom', 'star', 'flag', 'heart', 'lens',
      'instagram', 'youtube', 'behance', 'grid',
    ]),
  }),
});

const pricing = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    price: z.string(),
    unit: z.string(),
    features: z.array(z.string()),
    highlighted: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    photo: z.string().optional(),
    order: z.number().optional().default(0),
  }),
});

export const collections = { gallery, home, about, contact, howItWorks, pricing, testimonials };
