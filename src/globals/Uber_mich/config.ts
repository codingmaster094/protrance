import type { GlobalConfig } from 'payload'
import { revalidateUber_mich } from './hooks/revalidateUber_mich'
import { Hero } from '@/components/Hero/config'
import { partnerlogo } from '@/components/partner_logos/config'
import { abouts } from '@/components/uber_mich_about/config'
import { abouts2 } from '@/components/uber_mich_about2/config'
import { service } from '@/components/service_section/config'
import { uberMap } from '@/components/uber_map/config'
import { Wichtige_Meilensteine } from '@/components/wichtige_meilensteine/config'
import { Reviews } from '@/components/enableReviews/config'
import { protance_zahlen } from '@/components/Protance_Zahlen/config'
import { SEO } from '@/components/SEO/config'
import slugify from 'slugify'

export const Uber_michPage: GlobalConfig = {
  slug: 'uber-mich',
  label: {
    en: 'About Me',
    de: 'Über mich',
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
            en: 'Service Section',
            de: 'Dienstleistungsbereich',
          },
          fields: [service],
        },
        {
          label: {
            en: 'Milestones Section',
            de: 'Wichtige Meilensteine',
          },
          fields: [Wichtige_Meilensteine],
        },
        {
          label: {
            en: 'About Section 2',
            de: 'Über Abschnitt 2',
          },
          fields: [abouts2],
        },
        {
          label: {
            en: 'Map',
            de: 'Karte',
          },
          fields: [uberMap],
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
            en: 'Reviews',
            de: 'Bewertungen',
          },
          fields: [Reviews],
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
    afterChange: [revalidateUber_mich],
  },
}
