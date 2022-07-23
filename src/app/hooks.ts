import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import type {AppDispatch, AppState} from './store'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export  const  useGetPostsById = async (id: { id :number }) => {
    const api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts/',
        timeout: 4000,
        headers: {},
        method: "GET",
    })
    return api.get(String(id.id));
};
