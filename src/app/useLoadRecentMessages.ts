import {randText} from "@ngneat/falso";

export function useLoadRecentMessages() {
    if (typeof window !== "undefined") {
        return new Promise((resolve, reject) => {
            try {
                const messages = JSON.parse(window.localStorage.getItem("Messages"));
                resolve(messages);
                return messages;
            } catch (e) {
                reject(e);
                console.log(e)
            }
        })
    }
}

export function useLoadRecentMessagesById(id: number) {
    if (typeof window !== "undefined") {
        const filteredId = id === 0 ? 1 : id - 1;
        const messages = JSON.parse(window.localStorage.getItem("Messages"));
        return messages[filteredId];
    }
}
