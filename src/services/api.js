import axios from "axios";

// Backend URL from environment variable
const API_URL = process.env.REACT_APP_API_URL;

// Example: contact form submit
export const sendContact = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending contact:", error);
    throw error;
  }
};
