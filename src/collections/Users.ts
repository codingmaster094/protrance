import type { CollectionConfig } from 'payload'
import slugify from 'slugify'
export const Users: CollectionConfig = {
  slug: 'users',
    labels: {
    plural: {
      en: 'users',
      de: 'Benutzer',
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
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
      unique: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => value || slugify(siblingData.title, { lower: true }),
        ],
      },
    },
    // Email added by default
    // Add more fields as needed
  ],
}
