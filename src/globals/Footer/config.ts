import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'
import slugify from 'slugify'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: {
    en: 'Footer',
    de: 'Fußzeile',
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
      name: 'footerlogo',
      type: 'upload',
      label: {
        en: 'Footer Logo',
        de: 'Fußzeilen-Logo',
      },
      relationTo: 'media',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Footer Description',
        de: 'Footer Beschreibung',
      },
    },
    {
      name: 'sprechzeiten',
      label: {
        en: 'Opening Hours',
        de: 'Sprechzeiten',
      },
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'text',
          label: {
            en: 'Day',
            de: 'Tag',
          },
        },
        {
          name: 'time',
          type: 'text',
          label: {
            en: 'Time',
            de: 'Uhrzeit',
          },
        },
      ],
    },
    {
      name: 'kontakt',
      label: {
        en: 'Contact',
        de: 'Kontakt',
      },
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: {
            en: 'Phone Number',
            de: 'Telefonnummer',
          },
        },
        {
          name: 'phone_url',
          type: 'text',
          label: {
            en: 'Phone URL',
            de: 'Telefon URL',
          },
        },
        {
          name: 'email',
          type: 'text',
          label: {
            en: 'Email',
            de: 'E-Mail',
          },
        },
        {
          name: 'email_url',
          type: 'text',
          label: {
            en: 'Email URL',
            de: 'E-Mail URL',
          },
        },
        {
          name: 'address',
          type: 'textarea',
          label: {
            en: 'Address',
            de: 'Adresse',
          },
        },
        {
          name: 'address_url',
          type: 'text',
          label: {
            en: 'Address URL',
            de: 'Adresse URL',
          },
        },
      ],
    },
    {
      name: 'navigationLinks',
      label: {
        en: 'Navigation',
        de: 'Navigation',
      },
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Link Label',
            de: 'Linktext',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: {
            en: 'URL',
            de: 'URL',
          },
        },
      ],
    },
    {
      name: 'legalLinks',
      label: {
        en: 'Legal',
        de: 'Rechtliches',
      },
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Link Label',
            de: 'Linktext',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: {
            en: 'URL',
            de: 'URL',
          },
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: {
        en: 'Copyright Text',
        de: 'Copyright Text',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
