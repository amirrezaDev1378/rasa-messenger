import {useEffect} from "react";

const useCheckUser = () => {
    if (typeof window !== "undefined") {
        return !!localStorage.getItem('LocalUser');
    }
}
export default useCheckUser;
