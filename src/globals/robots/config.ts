import type { GlobalConfig } from 'payload'

export const Robots: GlobalConfig = {
  slug: 'robots',
  label: {
    en: 'Robots',
    de: 'Robots',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'robots',
      type: 'text',
      label: {
        en: 'Robots Txt Content',
        de: 'Inhalt der Robots.txt',
      },
      required: false,
      admin: {
        placeholder: 'User-agent: *\nDisallow: /admin',
      },
    },
  ],
}
