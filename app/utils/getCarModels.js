const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getCarModels(makeId, year) {
  const response = await fetch(
    `${API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error('Error loading models');
  }
  const data = await response.json();

  return data.Results;
}
