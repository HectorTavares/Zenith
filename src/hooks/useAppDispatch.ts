import { AppDispatch } from "@/providers/reduxStoreProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
