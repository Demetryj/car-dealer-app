const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getCarBrands() {
  const response = await fetch(`${API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`);

  if (!response.ok) {
    throw new Error('Error loading car brands');
  }

  const data = await response.json();

  return data.Results;
}
