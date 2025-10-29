import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getServerSideURL } from '@/utilities/getURL';

export async function GET() {
  const config = await configPromise;
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: 'posts',
    limit: 0,
    where: {},
  });

  const url = getServerSideURL();

  const globalUrls = await Promise.all(
    (config.globals || []).map(async (globalConfig) => {
      try {
        const globalData = await payload.findGlobal({ slug: globalConfig.slug });

        if (
          globalData &&
          globalConfig.slug !== undefined &&
          globalData.updatedAt &&
          globalData.createdAt
        ) {
          return {
            url: `${url}/${globalConfig.slug}`,
            lastModified: new Date(globalData.updatedAt),
            created: new Date(globalData.createdAt),
          };
        }
      } catch (error) {
        console.error(`Error fetching global: ${globalConfig.slug}`, error);
      }

      return null;
    })
  );

  const sitemapUrls: { url: string; lastModified: Date; created: Date }[] = [
    ...posts.docs.map(({ slug, updatedAt, createdAt }) => ({
      url: `${url}/${slug}`,
      lastModified: new Date(updatedAt),
      created: new Date(createdAt),
    })),
    ...globalUrls.filter(Boolean) as { url: string; lastModified: Date; created: Date }[],
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls
    .map(
      (item) => `
    <url>
      <loc>${item.url}</loc>
      <created>${item.created.toISOString()}</created>
      <lastmod>${item.lastModified.toISOString()}</lastmod>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
