export default async function Alldata(params) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "https://protrance.vercel.app/api/globals"}${params}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch data: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error;
  }
}
