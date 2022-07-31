import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import type {AppDispatch, AppState} from './store'
import checkUser from "./useCheckUser";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const useCheckUser = checkUser;
