import axios from "axios";

const BASE_URL = process.env.NODE_ENV ==='development' ? 'http://localhost:4000' : 'http://jiny.devhk.me';

const baseApi = axios.create({
  baseURL: BASE_URL,
});

baseApi.interceptors.response.use(
  (res) => {
    const { email, userName, token } = res.data;

    const userInfo = {
      email,
      userName,
      token
    }

    if(res.data) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    return res;
  },
  (e) => {
    return Promise.reject(e.message);
  }
)

export default baseApi;



