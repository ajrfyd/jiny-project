import axios from "axios";

export const BASE_URL = process.env.NODE_ENV ==='development' ? 'http://localhost:4000' : 'http://jiny.devhk.me';

const baseApi = axios.create({
  baseURL: BASE_URL,
});

export const loginApi = axios.create({
  baseURL: BASE_URL + '/users/login' 
})

loginApi.interceptors.response.use(
  (res) => {
    if(!res.data) return;
    const { email, userName, token } = res.data;

    const userInfo = {
      email,
      userName,
      token
    };
    console.log(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    return res;
  },
  (e) => {
    return Promise.reject(e.message);
  }
)

export default baseApi;



