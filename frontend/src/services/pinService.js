import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const fetchPins = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pins`, {
      params: { page, limit }
    });

    // Filter out example domains and invalid URLs
    const validPins = (response.data.pins || []).filter(pin => {
      if (!pin.imageUrl) return false;

      const invalidDomains = [
        "example.com",
        "example-domain",
        "placeholder.com",
        "dummyimage.com"
      ];

      return !invalidDomains.some(domain => pin.imageUrl.includes(domain));
    });

    return validPins;
  } catch (error) {
    console.error("Error fetching pins:", error);
    throw error;
  }
};

export const fetchPinById = async id => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pins/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pin:", error);
    throw error;
  }
};
