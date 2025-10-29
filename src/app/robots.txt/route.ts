import { getServerSideURL } from '@/utilities/getURL';
import type { NextRequest } from 'next/server';

export async function GET(_req: NextRequest): Promise<Response> {
  const url = getServerSideURL();

  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /admin
Sitemap: ${url}/sitemap.xml
  `.trim();

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
