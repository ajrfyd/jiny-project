import { useQuery, useMutation } from "react-query";
import baseApi from '../../api/axios';
import { AxiosError } from 'axios';

type UserType = {
  email: string;
  password: string;
};

type ResponseType = {
  token: string;
}

export const reqLogin = async (user: UserType) => {
  const { data } = await baseApi.post<ResponseType>('/users/login', user);
  return data;
  // try {
  // } catch(e) {
  //   console.log(e);
  // }
}; 


// const loginMutation = useMutation()