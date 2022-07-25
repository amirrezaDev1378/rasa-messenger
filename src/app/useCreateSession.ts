import {randFullName} from "@ngneat/falso";
import Axios from "axios";

const useCreateSession = async () => {
    if (typeof window !== "undefined") {
        try {
            const randomUsers = await Axios.get("/api/getUsers");
            localStorage.clear();
            localStorage.setItem('LocalUser', JSON.stringify({
                name: randFullName(),
            }));
            localStorage.setItem('Users', JSON.stringify(randomUsers.data));
            return "Session created successfully";
        } catch (e) {
            return `Error creating session => \n ${e}`;
        }

    }
}
export default useCreateSession;
