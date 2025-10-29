import type { Field } from 'payload'
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const abouts2: Field = {
  name: 'abouts2',
  type: 'group',
  label: { en: 'About Section', de: 'Über Abschnitt' },
  fields: [
    {
      name: 'aboutsImage',
      type: 'upload',
      label: { en: 'Abouts Image', de: 'Über Bild' },
      relationTo: 'media',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      label: { en: 'Title', de: 'Titel' },
      localized: true,
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      label: { en: 'Description', de: 'Beschreibung' },
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      name: 'nestedSections',
      type: 'array',
      label: { en: 'Nested Sections', de: 'Verschachtelte Abschnitte' },
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'nestedaboutsImage',
              type: 'upload',
              label: { en: 'Nested Abouts Image', de: 'Verschachteltes Über Bild' },
              relationTo: 'media',
              required: false,
            },
            {
              name: 'title',
              type: 'text',
              label: { en: 'Title', de: 'Titel' },
              localized: true,
              required: false,
            },
            {
              name: 'description',
              type: 'richText',
              label: { en: 'Description', de: 'Beschreibung' },
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  EXPERIMENTAL_TableFeature(),
                ],
              }),
            },
          ],
        },
      ],
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: { en: 'Type', de: 'Typ' },
      options: [
        { label: { en: 'None', de: 'Keine' }, value: 'none' },
        { label: { en: 'High Impact', de: 'Hohe Wirkung' }, value: 'highImpact' },
        { label: { en: 'Medium Impact', de: 'Mittlere Wirkung' }, value: 'mediumImpact' },
        { label: { en: 'Low Impact', de: 'Geringe Wirkung' }, value: 'lowImpact' },
      ],
      required: false,
    },
    {
      name: 'richText',
      type: 'richText',
      label: { en: 'Rich Text', de: 'Rich-Text' },
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      name: 'media',
      type: 'upload',
      label: { en: 'Conditional Media', de: 'Bedingte Medien' },
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
}
