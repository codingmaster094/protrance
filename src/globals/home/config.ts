import type { GlobalConfig } from 'payload';
import { revalidateHome } from './hooks/revalidateHome';
import { Hero } from '@/components/Hero/config';
import { partnerlogo } from '@/components/partner_logos/config';
import { abouts } from '@/components/home_about/config';
import { protance_zahlen } from '@/components/Protance_Zahlen/config';
import { cta } from '@/components/CTA/config';
import { cta2 } from '@/components/CTA2/config';
import { service } from '@/components/service_section/config';
import { service2 } from '@/components/service_section2/config';
import { Meine_Referenzen } from '@/components/Meine_Referenzen/config';
import { Reviews } from '@/components/enableReviews/config';
import { faq } from '@/components/faq/config';
import { SEO } from '@/components/SEO/config';
import slugify from 'slugify';

export const HomePage: GlobalConfig = {
  slug: 'home',
  label: {
    en: 'Homepage',
    de: 'Startseite',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: {
        en: 'Slug',
        de: 'Kurzlink',
      },
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => {
            if (siblingData?.title) {
              return slugify(siblingData.title, { lower: true })
            }
            return value
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Hero',
            de: 'Held',
          },
          fields: [Hero],
        },
        {
          label: {
            en: 'Abouts',
            de: 'Über uns',
          },
          fields: [abouts],
        },
        {
          label: {
            en: 'Partner Logo',
            de: 'Partnerlogo',
          },
          fields: [partnerlogo],
        },
        {
          label: {
            en: 'Protrance Numbers',
            de: 'Protrance Zahlen',
          },
          fields: [protance_zahlen],
        },
        {
          label: {
            en: 'CTA',
            de: 'Handlungsaufforderung',
          },
          fields: [cta],
        },
        {
          label: {
            en: 'Service Section',
            de: 'Dienstleistungsbereich',
          },
          fields: [service],
        },
        {
          label: {
            en: 'My References',
            de: 'Meine Referenzen',
          },
          fields: [Meine_Referenzen],
        },
        {
          label: {
            en: 'CTA-2',
            de: 'Handlungsaufforderung 2',
          },
          fields: [cta2],
        },
        {
          label: {
            en: 'Service Section 2',
            de: 'Dienstleistungsbereich 2',
          },
          fields: [service2],
        },
        {
          label: {
            en: 'Reviews',
            de: 'Bewertungen',
          },
          fields: [Reviews],
        },
        {
          label: {
            en: 'FAQ',
            de: 'Häufige Fragen',
          },
          fields: [faq],
        },
        {
          label: {
            en: 'SEO',
            de: 'SEO',
          },
          fields: [SEO],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}
