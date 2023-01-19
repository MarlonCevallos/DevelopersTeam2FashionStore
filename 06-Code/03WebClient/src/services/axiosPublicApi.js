import axios from "axios";

const baseUrl = "https://api.plos.org/search?rows=1000&q=title";
const urlClientComputer = "https://httpbin.org/get";
//const numArticles = 10000;

export async function getArticles(nameArticle) {
  try {
    var response;
    if (!nameArticle.trim()) {
      response = await axios(`${baseUrl}`);
    } else {
      response = await axios(`${baseUrl}:${nameArticle}`);
    }

    const data = response.data;
    const docs = data.response.docs;
    return docs;
  } catch (error) {
    console.log(error);
  }
}

export async function getArticle(id) {
  try {
    const response = await axios(`https://api.plos.org/search?q=id:${id}`);
    return response.data.response.docs[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getClientPC() {
  try {
    const response = await axios(`${urlClientComputer}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
