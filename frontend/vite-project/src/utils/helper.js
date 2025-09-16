import axios from "axios"

export const fetchBloodBanks = async (pincode) => {
  try {
    const response = await axios.post(`/api/bloodbanks`, { pincode });
    return response.data;
  } catch (error) {
    throw error.response?.data.message || "errrrrrror"
  }
};