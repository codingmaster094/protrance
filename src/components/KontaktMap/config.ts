import type { Field } from 'payload'
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const KontaktMap: Field = {
  name: 'Kontaktmap',
  type: 'group',
  label: { en: 'Contact Map', de: 'Kontaktkarte' },
  fields: [
    {
      name: 'headding',
      type: 'text',
      required: false,
      label: { en: 'Heading', de: 'Überschrift' },
      localized: true,
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
      name: 'Form_title',
      type: 'text',
      label: { en: 'Form Title', de: 'Formulartitel' },
      localized: true,
      required: false,
    },
    {
      name: 'MapImage',
      type: 'upload',
      label: { en: 'Map Image', de: 'Kartenbild' },
      relationTo: 'media',
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
      label: { en: 'Rich Text', de: 'Rich Text' },
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
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
}
