export async function fetchHealthCardData() {
  try {
    const response = await fetch(
     "http://localhost:1337/api/health-banners?populate[banner][populate]=*"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Return only the InsuranceSection part
    return result;
  } catch (error) {
    console.error("Error fetching card data:", error);
    return null;
  }
}
