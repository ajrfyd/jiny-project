import { useSelector } from "react-redux";
import { rootState } from "../store";

export const useToggle = () => {
  const { toggle } = useSelector((state: rootState) => state);
  return toggle;
}