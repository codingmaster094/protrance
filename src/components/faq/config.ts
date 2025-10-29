import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import type { Field } from 'payload';

export const faq: Field = {
  name: 'faq',
  type: 'group',
  label: {
    en: 'FAQ Section',
    de: 'FAQ Abschnitt',
  },
  fields: [
    {
      name: 'enableFAQ',
      type: 'checkbox',
      label: {
        en: 'Enable FAQ Section',
        de: 'FAQ-Bereich aktivieren',
      },
      defaultValue: true,
    },
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        de: 'Titel',
      },
      required: false,
    },
    {
      name: 'nestedfaq',
      type: 'array',
      label: {
        en: 'Nested FAQs',
        de: 'Verschachtelte FAQs',
      },
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Question',
                de: 'Frage',
              },
              required: false,
            },
            {
              name: 'description',
              type: 'richText',
              label: {
                en: 'Answer',
                de: 'Antwort',
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
  ],
};
