import axios from "axios"

export const fetchBloodBanks = async (pincode) => {
  try {
    const response = await axios.post(`/api/bloodbanks`, { pincode });
    return response.data;
  } catch (error) {
    console.log(error.response);
    console.log(error.response?.data);
    
    
    const backendError = error.response?.data
    console.log(backendError?.message);
    
    throw new Error(backendError?.message || "Something went wrong")
  }
};