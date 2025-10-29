import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './globals/Header/config'
import { Footer } from './globals/Footer/config'
import { menus } from './components/menus/config'
import { Reviews } from './components/Reviews/config'
import { HomePage } from './globals/home/config'
import { AbnehmenPage } from './globals/abnehmen/config'
import { Entspannung_StressabbauPage } from './globals/Entspannung_Stressabbau/config'
import { Lampenfieber_PrufungsangstPage } from './globals/Lampenfieber_Prufungsangst/config'
import { RaucherentwohnungPage } from './globals/Raucherentwohnung/config'
import { SelbstfursorgePage } from './globals/Selbstfursorge/config'
import { KontaktPage } from './globals/Kontakt/config'
import { Uber_michPage } from './globals/Uber_mich/config'
import { BlogPage } from './globals/Blog/config'
import { Impressum } from './globals/impressum/config'
import { Datenschutzerklarung } from './globals/datenschutzerklarung/config'
import { Posts } from './collections/posts'
import { Pages } from './collections/Pages'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { Robots } from './globals/robots/config'
import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  serverURL: 'https://protrance-backend-main.vercel.app',
  i18n: {
    supportedLanguages: { en, de },
  },
  admin: {
    livePreview: {
       url: 'http://localhost:3000',
       collections: ['pages', 'posts'], 
    },
    user: Users.slug,
    meta: {
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/images/favicon.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: './src/components/graphics/CustomLogo',
      },
    },
    
  },
  cors: ['https://protrance-backend-main.vercel.app'],
  collections: [Users, Media, Posts, Pages],
  globals: [
    Header,
    Footer,
    menus,
    Reviews,
    HomePage,
    AbnehmenPage,
    Entspannung_StressabbauPage,
    Lampenfieber_PrufungsangstPage,
    RaucherentwohnungPage,
    SelbstfursorgePage,
    KontaktPage,
    Uber_michPage,
    BlogPage,
    Impressum,
    Datenschutzerklarung,
    Robots,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
