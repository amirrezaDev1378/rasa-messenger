import {randText} from "@ngneat/falso";

export const useGetDummyInitialMessages = () => {
    const messages = randText({length:25 , charCount:20})
    let chat:Array<object> = [];

    messages.forEach((message , i) => {
        chat.push({
            id:i,
            messages:[{
                sender:"server",
                msg:message
            }]
        })
    })

    return chat;
}
