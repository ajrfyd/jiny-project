import { useQuery, useMutation, UseMutationOptions } from "react-query";
import baseApi, { loginApi } from '../../api/axios';
import { AxiosError } from 'axios';
import { ResponseType, UserType } from "./type";


export const reqLogin = async (user: UserType): Promise<ResponseType> => {
  const { data } = await loginApi.post<ResponseType>('', user);
  return data;
}; 


export const useLoginMutation = (options?: UseMutationOptions<ResponseType, Error, UserType>) => {
  return useMutation(reqLogin, options); 
}