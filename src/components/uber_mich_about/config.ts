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
      label: { en: 'Heading', de: 'Überschrift' },
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
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      name: 'Sub_description',
      type: 'richText',
      label: { en: 'Sub Description', de: 'Unterbeschreibung' },
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
      name: 'subtitle',
      type: 'text',
      label: { en: 'Subtitle', de: 'Untertitel' },
      localized: true,
      required: false,
    },
    {
      name: 'Inner_description',
      type: 'richText',
      label: { en: 'Inner Description', de: 'Innere Beschreibung' },
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
      name: 'media',
      type: 'upload',
      label: { en: 'Conditional Media', de: 'Bedingte Medien' },
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: false,
    },
  ],
}
