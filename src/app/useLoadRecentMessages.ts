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
        const messages = JSON.parse(window.localStorage.getItem("Messages"));
        return messages[id - 1];
    }
}
