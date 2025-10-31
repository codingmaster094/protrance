export async function GET() {
  try {
    const res = await fetch("https://protrance.vercel.app/api/globals/robots", {
      next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch robots: ${res.statusText}`);
    }

    const data = await res.json();

    const robotsContent = data?.robots
      ?.split(/\s{2,}/)
      ?.map((line) => line.trim())
      ?.join("\n")
      ?.trim();

    return new Response(robotsContent || "user-agent: *\nallow: /", {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("robots.txt fetch error:", error);
    const fallback = [
      "user-agent: *",
      "allow: /",
      "disallow: /admin",
      `sitemap: ${process.env.BASE_DOMAIN || "https://yourdomain.com"}/sitemap.xml`,
    ].join("\n");

    return new Response(fallback, {
      headers: { "Content-Type": "text/plain" },
    });
  }
}
