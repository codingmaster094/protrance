import type { Field } from 'payload'
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Wichtige_Meilensteine: Field = {
  name: 'wichtige_meilensteine',
  type: 'group',
  label: { en: 'Key Milestones', de: 'Wichtige Meilensteine' },
  fields: [
    {
      name: 'headding',
      type: 'text',
      label: { en: 'Heading', de: 'Überschrift' },
      localized: true,
      required: false,
    },
    {
      name: 'main_description',
      type: 'richText',
      label: { en: 'Main Description', de: 'Hauptbeschreibung' },
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature()
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
              name: 'Year',
              type: 'text',
              label: { en: 'Year', de: 'Jahr' },
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
                  EXPERIMENTAL_TableFeature()
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
      label: { en: 'Type', de: 'Typ' },
      defaultValue: 'lowImpact',
      options: [
        { label: { en: 'None', de: 'Keine' }, value: 'none' },
        { label: { en: 'High Impact', de: 'Hohe Wirkung' }, value: 'highImpact' },
        { label: { en: 'Medium Impact', de: 'Mittlere Wirkung' }, value: 'mediumImpact' },
        { label: { en: 'Low Impact', de: 'Geringe Wirkung' }, value: 'lowImpact' },
      ],
      required: false,
    },
    {
      name: 'media',
      type: 'upload',
      label: { en: 'Media', de: 'Medien' },
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: false,
    },
  ],
}
