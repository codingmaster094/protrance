export default async function Alldata(params) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "https://protrance.vercel.app/api/globals"}${params}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`API error response: ${response.status} - ${errorBody}`);
      throw new Error(`Failed to fetch data: ${response.status} - ${errorBody}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in Alldata fetch:", error);
    throw error;
  }
}
