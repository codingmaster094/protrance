import type { Field } from 'payload';
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const abouts: Field = {
  name: 'abouts',
  type: 'group',
  label: {
    en: 'About Section',
    de: 'Über Bereich',
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
      name: 'subTitle',
      type: 'text',
      label: {
        en: 'Sub Title',
        de: 'Untertitel',
      },
    },
    {
      name: 'subDescription',
      type: 'richText',
      label: {
        en: 'Sub Description',
        de: 'Unterbeschreibung',
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
      name: 'ulLi',
      type: 'richText',
      label: {
        en: 'List Items',
        de: 'Listenelemente',
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
              label: {
                en: 'Same Tab',
                de: 'Gleiches Tab',
              },
              value: '_self',
            },
            {
              label: {
                en: 'New Tab',
                de: 'Neues Tab',
              },
              value: '_blank',
            },
          ],
          defaultValue: '_self',
        },
      ],
    },
    {
      name: 'nestedSections',
      type: 'array',
      label: {
        en: 'Nested Sections',
        de: 'Verschachtelte Abschnitte',
      },
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'aboutsImage',
              type: 'upload',
              label: {
                en: 'About Image',
                de: 'Über Bild',
              },
              relationTo: 'media',
            },
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
          ],
        },
      ],
    },
    {
      name: 'type',
      type: 'select',
      label: {
        en: 'Type',
        de: 'Typ',
      },
      defaultValue: 'lowImpact',
      options: [
        {
          label: {
            en: 'None',
            de: 'Keiner',
          },
          value: 'none',
        },
        {
          label: {
            en: 'High Impact',
            de: 'Hohe Wirkung',
          },
          value: 'highImpact',
        },
        {
          label: {
            en: 'Medium Impact',
            de: 'Mittlere Wirkung',
          },
          value: 'mediumImpact',
        },
        {
          label: {
            en: 'Low Impact',
            de: 'Geringe Wirkung',
          },
          value: 'lowImpact',
        },
      ],
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
