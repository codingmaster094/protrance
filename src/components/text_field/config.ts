import type { Field } from 'payload'

export const Blog_List_Title: Field = {
  name: 'blog_list_title',
  type: 'group',
  label: {
    en: 'Blog List Title',
    de: 'Bloglisten-Titel',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        de: 'Titel',
      },
      localized: true,
      required: false,
    },
  ],
}
