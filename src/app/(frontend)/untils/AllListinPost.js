export default async function AllListinPost(params) {
  const response = await fetch(
    `${process.env.NEXT_POST_LISTING_BASE_URL || "https://protrance.vercel.app/api"}${params}`,
    { next: { revalidate: 3600 } } // must be positive, NOT zero
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return await response.json();
}
