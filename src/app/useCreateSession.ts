import {randFullName} from "@ngneat/falso";
import Axios from "axios";

const useCreateSession = async () => {
    if (typeof window !== "undefined") {
        try {
            // get users info from API

            const LocalUserAvatar = await Axios.get("/api/getAvatar");
            const randomUsers = await Axios.get("/api/getUsers");
            const randomMessages = await Axios.get("/api/getRecentMessages");

            const LocalUserName = randFullName({gender: "female"});
            // inject into localstorage
            localStorage.clear();
            localStorage.setItem('LocalUser', JSON.stringify({
                name: LocalUserName,
                avatar: LocalUserAvatar.data
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
