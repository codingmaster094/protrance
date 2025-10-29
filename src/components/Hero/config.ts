import type { Field } from 'payload';

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  EXPERIMENTAL_TableFeature,
} from '@payloadcms/richtext-lexical';

export const Hero: Field = {
  name: 'hero',
  type: 'group',
  label: {
    en: 'Hero Section',
    de: 'Hero Bereich',
  },
  fields: [
    {
      name: 'container_Hight',
      type: 'select',
      label: {
        en: 'Container Height',
        de: 'Containerhöhe',
      },
      options: [
        {
          label: {
            en: 'Full',
            de: 'Voll',
          },
          value: 'full',
        },
        {
          label: {
            en: 'Normal',
            de: 'Normal',
          },
          value: 'normal',
        },
      ],
      required: true,
      defaultValue: 'normal',
    },
    {
      name: 'Image_Position',
      type: 'select',
      label: {
        en: 'Image Position',
        de: 'Bildposition',
      },
      options: [
        {
          label: {
            en: 'Top',
            de: 'Oben',
          },
          value: 'top',
        },
        {
          label: {
            en: 'Middle',
            de: 'Mitte',
          },
          value: 'middle',
        },
        {
          label: {
            en: 'Bottom',
            de: 'Unten',
          },
          value: 'bottam',
        },
      ],
      required: true,
      defaultValue: 'middle',
    },
    {
      name: 'heroImage',
      type: 'upload',
      label: {
        en: 'Hero Image',
        de: 'Hero Bild',
      },
      relationTo: 'media',
      required: false,
    },
    {
  name: 'video',
  type: 'upload',
  label: {
    en: 'Hero Video',
    de: 'Hero Video',
  },
  relationTo: 'media', // or 'videos' if you make a separate collection
  required: false,
  admin: {
    description: 'Upload a video file (e.g. MP4, WebM)',
  },
},
    {
      name: 'text',
      type: 'text',
      label: {
        en: 'Text',
        de: 'Text',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: {
        en: 'Rich Text',
        de: 'Rich Text',
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
      name: 'type',
      type: 'select',
      label: {
        en: 'Type',
        de: 'Typ',
      },
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
      defaultValue: 'lowImpact',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      label: {
        en: 'Media',
        de: 'Medien',
      },
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) =>
          ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
};
