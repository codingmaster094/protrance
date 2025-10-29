export default async function AllPost(params) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_POST_BASE_URL ||
        "https://protrance-backend-main.vercel.app/api"
      }${params}`,
      { next: { revalidate: 0 } }
    );
    if (!response) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; 
  }
}
