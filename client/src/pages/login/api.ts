import { useQuery, useMutation, UseMutationOptions } from "react-query";
import { loginApi, signupApi } from '../../api/axios';
import { AxiosError } from 'axios';
import { ResponseType, UserType, SignUpSuccessMsg, NewUserType } from './type';
import { useReqArticlesMutation } from '../main/api';


export const reqLogin = async (user: UserType): Promise<ResponseType> => {
  const { data } = await loginApi.post<ResponseType>('', user);
  return data;
}; 


export const useLoginMutation = (options?: UseMutationOptions<ResponseType, Error, UserType>) => {
  return useMutation(reqLogin, options); 
}


export const reqSignup = async (user: NewUserType): Promise<SignUpSuccessMsg> => {
  const { data } = await signupApi.post<SignUpSuccessMsg>('', user);  
  return data;
}

export const userSignupMutation = (options?: UseMutationOptions<SignUpSuccessMsg, Error, NewUserType>) => {
  return useMutation(reqSignup, options);
} 