import axios from "axios";

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: `http://localhost:3000`,
  });
  return instance;
};

export default getAxiosInstance;
