import type { GlobalConfig } from 'payload'
import { revalidateKontakt } from './hooks/revalidateKontakt'
import { Hero } from '@/components/Hero/config'
import { Kontaktmoglichkeiten } from '@/components/Kontaktmoglichkeiten/config'
import { KontaktMap } from '@/components/KontaktMap/config'
import { Reviews } from '@/components/enableReviews/config'
import { SEO } from '@/components/SEO/config'
import slugify from 'slugify'

export const KontaktPage: GlobalConfig = {
  slug: 'kontakt',
  label: {
    en: 'Contact Page',
    de: 'Kontaktseite',
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
            en: 'Contact Options',
            de: 'Kontaktmöglichkeiten',
          },
          fields: [Kontaktmoglichkeiten],
        },
        {
          label: {
            en: 'Contact Map',
            de: 'Kontaktkarte',
          },
          fields: [KontaktMap],
        },
        {
          label: {
            en: 'SEO',
            de: 'SEO',
          },
          fields: [SEO],
        },
        {
          label: {
            en: 'Reviews',
            de: 'Bewertungen',
          },
          fields: [Reviews],
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
    afterChange: [revalidateKontakt],
  },
}
