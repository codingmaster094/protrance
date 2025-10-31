export default async function generatePageMetadata(params, fallback = {}) {

  let slug = "";
  if (typeof params === "string") {
    slug = params;
  } else if (params && typeof params === "object") {

    slug =
      params.slug ??
      params?.params?.slug ??
      (params?.params && typeof params.params === "string" ? params.params : "") ??
      "";
  }

  const normalizedSlug = slug ? (slug.startsWith("/") ? slug : `/${slug}`) : "/";
  const rawBase = process.env.NEXT_PUBLIC_BASE_URL;
  let base =
    rawBase && rawBase !== "undefined" ? String(rawBase).trim() : "https://protrance.vercel.app";
  base = base.replace(/\/+$/, "");  
  base = base.replace(/\/api\/globals$/i, "");
  base = base.replace(/\/api$/i, "");
  const url = `${base}/api/globals${normalizedSlug}`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok) {
      const title = fallback.title || "Default title";
      const description = fallback.description || "Default description";
      return {
        title,
        description,
        alternates: { canonical: "" },
        robots: "noindex,nofollow",
        openGraph: {
          type: "article",
          title,
          description,
          url: "",
        },
      };
    }

    // If content-type is not JSON, read body for debugging and bail out
    if (!contentType.includes("application/json")) {
      let text;
      try {
        text = await response.text();
      } catch (err) {
        text = `<failed to read non-JSON body: ${err.message}>`;
      }
      console.error(
        `generatePageMetadata: expected JSON but got "${contentType}" from ${url}. Body (truncated):`,
        text.slice(0, 1200)
      );
      const title = fallback.title || "Default title";
      const description = fallback.description || "Default description";
      return {
        title,
        description,
        alternates: { canonical: "" },
        robots: "noindex,nofollow",
        openGraph: {
          type: "article",
          title,
          description,
          url: "",
        },
      };
    }
    const data = await response.json();
    const seo = data?.seo || {};

    const title =
      seo?.meta?.title !== undefined ? seo.meta.title : fallback.title || "Default title";
    const description =
      seo?.meta?.description || fallback.description || "Default Description";

    const canonical =
      seo?.meta?.canonicalUrl && seo.meta.canonicalUrl !== "" ? seo.meta.canonicalUrl : "";

    const robots = `${seo?.meta?.indexing ?? "noindex"},${seo?.meta?.following ?? "nofollow"}`;

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      robots,
      openGraph: {
        type: "article",
        title: seo?.social?.facebook?.title || title,
        description: seo?.social?.facebook?.description || description,
        url: canonical,
      },
    };
  } catch (error) {
    console.error("generatePageMetadata: unexpected error:", error);
    const title = fallback.title || "Default title";
    const description = fallback.description || "Default description";
    return {
      title,
      description,
      alternates: { canonical: "" },
      robots: "noindex,nofollow",
      openGraph: {
        type: "article",
        title,
        description,
        url: "",
      },
    };
  }
}
