import axios from "axios";
const URI = "http://localhost:3002/fashionStore/provider";

export const getProviders = async () => {
  try {
    const response = await axios.get(URI);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProvider = async (id) => {
  try {
    const response = await axios.delete(`${URI}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProvider = async (provider) => {
  try {
    const response = await axios.post(`${URI}`, provider);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProvider = async (provider) => {
  try {
    const response = await axios.put(`${URI}/${provider.id}`, provider);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
