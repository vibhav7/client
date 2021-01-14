import axios from "axios";

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
  });
  return instance;
};

export default getAxiosInstance;
