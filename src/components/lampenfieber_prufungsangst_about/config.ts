import type { Field } from 'payload'
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const abouts: Field = {
  name: 'abouts',
  type: 'group',
  label: { en: 'About Section', de: 'Über Abschnitt' },
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
      label: { en: 'Main Description', de: 'Hauptbeschreibung' },
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      name: 'aboutsImage',
      type: 'upload',
      label: { en: 'About Image', de: 'Über Bild' },
      relationTo: 'media',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      label: { en: 'Title', de: 'Titel' },
      localized: true,
    },
    {
      name: 'description1',
      type: 'richText',
      label: { en: 'Description 1', de: 'Beschreibung 1' },
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      name: 'subdescription',
      type: 'richText',
      label: { en: 'Sub Description', de: 'Untere Beschreibung' },
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      name: 'description2',
      type: 'richText',
      label: { en: 'Description 2', de: 'Beschreibung 2' },
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
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
