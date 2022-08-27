import axios from "axios";

const BASE_URL = process.env.NODE_ENV ==='development' ? 'http://localhost:4000' : 'http://jiny.devhk.me';

const baseApi = axios.create({
  baseURL: BASE_URL,
});

// baseApi.interceptors.response.use(
//   (res) => {
//     console.log(res);
//   },
//   (e) => {
//     console.log('error!')
//     // console.log(e);
//     return Promise.reject(e.message)
//   }
// )

export default baseApi;



