export const useUpdateMessages = (userID, message) => {
    if (typeof window !== null) {
        let currentConversations: Array<any> = JSON.parse(localStorage.getItem("Messages"));
        let currentChat = currentConversations.find(obj => obj.id == +userID)
        currentChat.messages = message.messages
        localStorage.setItem("Messages", JSON.stringify(currentConversations));
    }
}
