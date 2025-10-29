import type { GlobalConfig } from 'payload'
import { revalidateSelbstfursorge } from './hooks/revalidateSelbstfursorge'
import { Hero } from '@/components/Hero/config'
import { partnerlogo } from '@/components/partner_logos/config'
import { abouts } from '@/components/selbstfursorge_about/config'
import { cta } from '@/components/CTA/config'
import { service } from '@/components/service_section/config'
import { Meine_Referenzen } from '@/components/Meine_Referenzen/config'
import { Reviews } from '@/components/enableReviews/config'
import { faq } from '@/components/faq/config'
import { SEO } from '@/components/SEO/config'
import slugify from 'slugify'

export const SelbstfursorgePage: GlobalConfig = {
  slug: 'selbstfursorge',
  label: {
    en: 'Self-care',
    de: 'Selbstfürsorge',
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
      admin: {
        readOnly: true,
      },
      label: {
        en: 'Slug',
        de: 'Kurzlink',
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
            en: 'Partner Logo',
            de: 'Partnerlogo',
          },
          fields: [partnerlogo],
        },
        {
          label: {
            en: 'About Section',
            de: 'Über Abschnitt',
          },
          fields: [abouts],
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
            en: 'Call To Action',
            de: 'Handlungsaufruf',
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
      admin: {
        position: 'sidebar',
      },
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateSelbstfursorge],
  },
}
