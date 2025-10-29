import type { Field } from 'payload'
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const uberMap: Field = {
  name: 'ubermap',
  type: 'group',
  label: {
    en: 'Map Section',
    de: 'Kartensektion',
  },
  fields: [
    {
      name: 'headding',
      type: 'text',
      label: {
        en: 'Heading',
        de: 'Überschrift',
      },
      localized: true,
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
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
      name: 'MapImage',
      type: 'upload',
      label: {
        en: 'Map Image',
        de: 'Kartenbild',
      },
      relationTo: 'media',
      required: false,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: {
        en: 'Type',
        de: 'Typ',
      },
      options: [
        { label: { en: 'None', de: 'Keine' }, value: 'none' },
        { label: { en: 'High Impact', de: 'Starke Wirkung' }, value: 'highImpact' },
        { label: { en: 'Medium Impact', de: 'Mittlere Wirkung' }, value: 'mediumImpact' },
        { label: { en: 'Low Impact', de: 'Geringe Wirkung' }, value: 'lowImpact' },
      ],
      required: false,
    },
    {
      name: 'media',
      type: 'upload',
      label: {
        en: 'Media',
        de: 'Medien',
      },
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: false,
    },
  ],
}
