export function  useGetUserInfoById(ID:number) {
if (typeof window !== "undefined") {
        const users = JSON.parse(window.localStorage.getItem("Users"));
        const filteredUsers = users.filter(userInfo => userInfo.id === ID);
        if (filteredUsers[0]){
            return filteredUsers[0]
        }
    }
}
export function useGetUsersInfo() {
    if (typeof window !== "undefined") {
        const users = JSON.parse(window.localStorage.getItem("Users"));
        return users;
    }
}
export function useGetLocalUserInfo() {
    if (typeof window !== "undefined") {
        const user = JSON.parse(window.localStorage.getItem("LocalUser"));
        return user;
    }
}
