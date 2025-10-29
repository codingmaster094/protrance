import type { Field } from 'payload'

export const Reviews: Field = {
  name: 'Reviews',
  type: 'group',
  label: { en: 'Reviews Section', de: 'Bewertungsbereich' },
  fields: [
    {
      name: 'enableReviews',
      type: 'checkbox',
      label: {
        en: 'Enable Reviews Section',
        de: 'Bewertungsbereich aktivieren',
      },
      defaultValue: true,
    },
  ],
}
