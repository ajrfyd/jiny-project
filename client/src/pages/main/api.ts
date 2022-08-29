import baseApi from "../../api/axios"
import { ResponsType } from "./type";

export const reqBoardList = async (): Promise<ResponsType> => {
  const { data } = await baseApi.get('/board/list');

  return data;
};

