import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const fetchPins = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pins`, {
      params: { page, limit }
    });

    console.log("Fetched pins:", response.data);

    if (!response.data.pins || !Array.isArray(response.data.pins)) {
      throw new Error("Invalid pins data format");
    }

    // Verify image URLs
    response.data.pins.forEach(pin => {
      if (!pin.imageUrl) {
        console.warn("Pin missing imageUrl:", pin.id);
      }
    });

    return response.data.pins || [];
  } catch (error) {
    console.error("Error fetching pins:", error);
    throw error;
  }
};

export const fetchPinById = async id => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pin/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pin:", error);
    throw error;
  }
};
