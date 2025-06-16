// Base API URL
const API_BASE_URL = "http://localhost:4000/api";

/**
 * Fetches all categories from the API
 * @returns {Promise<Array>} - Array of category objects
 */
export const fetchAllCategories = async () => {
  try {
    console.log("Attempting to fetch from:", `${API_BASE_URL}/categories`);
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    console.error("Is the backend server running at:", API_BASE_URL);
    throw error;
  }
};

/**
 * Fetches a single category by ID
 * @param {number} id - Category ID
 * @returns {Promise<Object>} - Category object
 */
export const fetchCategoryById = async id => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error);
    throw error;
  }
};

/**
 * Fetches all pins belonging to a category
 * @param {number} categoryId - Category ID
 * @returns {Promise<Array>} - Array of pin objects
 */
export const fetchCategoryPins = async categoryId => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/categories/${categoryId}/pins`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category pins");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching pins for category ${categoryId}:`, error);
    throw error;
  }
};
