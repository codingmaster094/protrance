import type { Field } from 'payload';
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const cta2: Field = {
  name: 'cta2',
  type: 'group',
  label: {
    en: 'Call to Action',
    de: 'Handlungsaufforderung',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
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
      label: {
        en: 'Type',
        de: 'Typ',
      },
      options: [
        {
          label: { en: 'None', de: 'Keine' },
          value: 'none',
        },
        {
          label: { en: 'High Impact', de: 'Starke Wirkung' },
          value: 'highImpact',
        },
        {
          label: { en: 'Medium Impact', de: 'Mittlere Wirkung' },
          value: 'mediumImpact',
        },
        {
          label: { en: 'Low Impact', de: 'Geringe Wirkung' },
          value: 'lowImpact',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      label: {
        en: 'Additional Content',
        de: 'Zusätzlicher Inhalt',
      },
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
      label: {
        en: 'Link',
        de: 'Link',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Link Label',
            de: 'Link-Beschriftung',
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
        {
          name: 'target',
          type: 'select',
          label: {
            en: 'Target',
            de: 'Ziel',
          },
          options: [
            {
              label: { en: 'Same Tab', de: 'Gleiches Tab' },
              value: '_self',
            },
            {
              label: { en: 'New Tab', de: 'Neues Tab' },
              value: '_blank',
            },
          ],
          defaultValue: '_self',
        },
      ],
    },
    {
      name: 'cta_image',
      type: 'upload',
      label: {
        en: 'CTA Image',
        de: 'CTA-Bild',
      },
      relationTo: 'media',
    },
    {
      name: 'media',
      type: 'upload',
      label: {
        en: 'Media',
        de: 'Medien',
      },
      relationTo: 'media',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
};
