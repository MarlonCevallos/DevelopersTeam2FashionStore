/* Author: Jaramillo Santiago*/

import axios from "axios";
const URI = "http://localhost:3002/fashionStore/cellar";

export const getCellars = async () => {
  try {
    const response = await axios.get(URI);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCellar = async (id) => {
  try {
    const response = await axios.delete(`${URI}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCellar = async (Cellar) => {
  try {
    const response = await axios.post(URI, Cellar);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCellar = async (Cellar) => {
  try {
    const response = await axios.put(`${URI}/${Cellar.id}`, Cellar);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
