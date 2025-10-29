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
  label: {
    en: 'About Section',
    de: 'Über uns Bereich',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: {
        en: 'Heading',
        de: 'Überschrift',
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
      name: 'aboutsImage',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'About Image',
        de: 'Über uns Bild',
      },
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
      name: 'mainDescription',
      type: 'richText',
      label: {
        en: 'Main Description',
        de: 'Hauptbeschreibung',
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
      name: 'subDescription',
      type: 'richText',
      label: {
        en: 'Sub Description',
        de: 'Untere Beschreibung',
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
      name: 'subtitle',
      type: 'text',
      label: {
        en: 'Subtitle',
        de: 'Untertitel',
      },
    },
    {
      name: 'innerDescription',
      type: 'richText',
      label: {
        en: 'Inner Description',
        de: 'Innere Beschreibung',
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
        de: 'Verknüpfung',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Link Label',
            de: 'Linkbeschriftung',
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
      defaultValue: 'lowImpact',
      options: [
        {
          label: {
            en: 'None',
            de: 'Keine',
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
      relationTo: 'media',
      label: {
        en: 'Media (conditional)',
        de: 'Medien (bedingt)',
      },
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
}
