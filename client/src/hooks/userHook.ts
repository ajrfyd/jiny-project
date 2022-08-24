import { useSelector } from "react-redux";
import { rootState } from "../store";

export const useGetUserState = () => {
  const { user } = useSelector((state: rootState) => state);
  return user;
};