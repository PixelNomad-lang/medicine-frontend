import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const getMedicines = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/medicines`);
    return response.data;
  } catch (error) {
    console.error("Error fetching medicines:", error);
    return { success: false, medicines: [] };
  }
};

export const addMedicine = async (medicineData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/medicines/add`, medicineData);
    return response.data;
  } catch (error) {
    console.error("Error adding medicine:", error);
    return { success: false, message: "Failed to add medicine" };
  }
};
