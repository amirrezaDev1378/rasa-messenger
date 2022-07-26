import {randFullName} from "@ngneat/falso";
import Axios from "axios";

const useCreateSession = async () => {
    if (typeof window !== "undefined") {
        try {
            const randomUsers = await Axios.get("/api/getUsers");
            const randomMessages = await Axios.get("/api/getRecentMessages");
            localStorage.clear();
            localStorage.setItem('LocalUser', JSON.stringify({
                name: randFullName(),
            }));
            localStorage.setItem('Users', JSON.stringify(randomUsers.data));
            localStorage.setItem('Messages', JSON.stringify(randomMessages.data));
            return "Session created successfully";
        } catch (e) {
            return `Error creating session => \n ${e}`;
        }

    }
}
export default useCreateSession;
