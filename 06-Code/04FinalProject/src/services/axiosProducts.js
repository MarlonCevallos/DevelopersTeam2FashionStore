/* Author: Marlon Cevallos*/

import axios from "axios";
const URI = "http://localhost:3002/fashionStore/product";

export const getProducts = async () => {
  try {
    const response = await axios.get(URI);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${URI}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(URI, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (product) => {
  try {
    const response = await axios.put(`${URI}/${product.id}`, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
