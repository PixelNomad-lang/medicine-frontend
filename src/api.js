const BASE_URL = "https://medicine-backend-57md.onrender.com"; // Backend URL

export const getMedicines = async () => {
  const response = await fetch(`${BASE_URL}/medicines`);
  return response.json();
};

export const addMedicine = async (medicine) => {
  const response = await fetch(`${BASE_URL}/medicines`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medicine),
  });
  return response.json();
};
