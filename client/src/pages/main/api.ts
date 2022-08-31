import baseApi from "../../api/axios"
import { ResponsType, ArticleResponseType, ArticleResType, MsgType } from './type';
import { useMutation, UseMutationOptions } from "react-query";

export const reqBoardList = async (): Promise<ResponsType> => {
  const { data } = await baseApi.get('/board/list');

  return data;
};

// export const reqArticleList = async (board: string): Promise<ArticleType[]> => {
//   const { data } = await baseApi.get(`/${board}/list`);
//   return data;
// };

export const reqArticleList = async (board: string): Promise<ArticleResponseType> => {
  const { data } = await baseApi.get(`/${board}/list`);
  return data;
};

// export const useReqArticlesMutation = (options: UseMutationOptions<ArticleType[], Error, string>) => {
//   return useMutation(reqArticleList, options);
// }

export const useReqArticlesMutation = (options: UseMutationOptions<ArticleResponseType, Error, string>) => {
  return useMutation(reqArticleList, options);
}