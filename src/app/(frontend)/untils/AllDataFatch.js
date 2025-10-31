export default async function Alldata(params) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://protrance.vercel.app/api/globals"
      }${params}`,
      { next: { revalidate: 3600 } } // revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error;
  }
}
