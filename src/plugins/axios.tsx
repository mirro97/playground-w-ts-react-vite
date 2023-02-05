import axios from "axios";

// const BASE_URL

const instanse = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

// 요청 인터셉터
instanse.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instanse;
