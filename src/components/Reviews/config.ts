import type { GlobalConfig } from 'payload';
import { revalidateReviews } from './hooks/revalidateReviews';
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const Reviews: GlobalConfig = {
  slug: 'reviews',
  access: {
    read: () => true,
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
      name: 'nestedlogos',
      type: 'array',
      label: {
        en: 'Nested Logos',
        de: 'Verschachtelte Logos',
      },
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'logosImage',
              type: 'upload',
              label: {
                en: 'Logo Image',
                de: 'Logo-Bild',
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
      name: 'nestedReviews',
      type: 'array',
      label: {
        en: 'Nested Reviews',
        de: 'Verschachtelte Rezensionen',
      },
      fields: [
        {
          type: 'group',
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
              name: 'reviewImage',
              type: 'upload',
              label: {
                en: 'Profile Image',
                de: 'Profilbild',
              },
              relationTo: 'media',
            },
            {
              name: 'profile_name',
              type: 'text',
              label: {
                en: 'Profile Name',
                de: 'Profilname',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateReviews],
  },
};
