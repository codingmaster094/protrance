import type { Field } from 'payload';
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const partnerlogo: Field = {
  name: 'partnerlogo',
  type: 'group',
  label: {
    en: 'Partner Logos',
    de: 'Partner-Logos',
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
      name: 'nestedSections',
      type: 'array',
      label: {
        en: 'Nested Sections',
        de: 'Verschachtelte Bereiche',
      },
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'partnerImage',
              type: 'upload',
              label: {
                en: 'Partner Image',
                de: 'Partnerbild',
              },
              relationTo: 'media',
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
      name: 'richText',
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
      name: 'media',
      type: 'upload',
      label: {
        en: 'Media',
        de: 'Medien',
      },
      relationTo: 'media',
      admin: {
        condition: (_, { type } = {}) =>
          ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
};
