import { useDispatch, useSelector, shallowEqual } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector, shallowEqual);