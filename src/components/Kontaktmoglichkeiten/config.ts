import type { Field } from 'payload'
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Kontaktmoglichkeiten: Field = {
  name: 'Kontaktmöglichkeiten',
  type: 'group',
  label: { en: 'Contact Options', de: 'Kontaktmöglichkeiten' },
  fields: [
    {
      name: 'headding',
      type: 'text',
      required: false,
      label: { en: 'Heading', de: 'Überschrift' },
      localized: true,
    },
    {
      name: 'main_description',
      type: 'richText',
      localized: true,
      label: { en: 'Main Description', de: 'Hauptbeschreibung' },
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
              label: { en: 'Nested About Image', de: 'Verschachteltes Bild' },
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
              name: 'link',
              type: 'group',
              label: { en: 'Link', de: 'Link' },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: { en: 'Link Label', de: 'Link Beschriftung' },
                  localized: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: { en: 'URL', de: 'URL' },
                  localized: true,
                },
                {
                  name: 'target',
                  type: 'select',
                  label: { en: 'Target', de: 'Ziel' },
                  options: [
                    { label: { en: 'Same Tab', de: 'Gleiches Tab' }, value: '_self' },
                    { label: { en: 'New Tab', de: 'Neues Tab' }, value: '_blank' },
                  ],
                  defaultValue: '_self',
                },
              ],
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
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
}
