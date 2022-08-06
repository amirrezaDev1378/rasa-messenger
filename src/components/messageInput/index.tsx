import React, {useRef} from 'react';
import styles from "./styles.module.scss"
import {Button, Stack, TextField} from "@mui/material";
import {SendOutlined} from "@mui/icons-material";
import {useSendMessage} from "@/app/useSocketio";
import {useAppDispatch} from "@/app/hooks";
import {addMessage} from "@/redux/messages/messagesSlice";

const messageSendHandler = (e: React.InputHTMLAttributes<HTMLInputElement>, dispatch) => {
    const message = e.value;

    // const socket = useSocketIo(message)
    useSendMessage(message, () => {
        dispatch(addMessage({sender: "client", msg: message}))
    })
    e.value = "";

}
const MessageInput = () => {
    const dispatch = useAppDispatch();

    const inputRef = useRef(null);
    return (
        <Stack className={styles.messageInputMain} justifyContent={"center"} alignItems={"center"} height={"fit-content"} direction={"row"} spacing={1}>
            <form onSubmit={(e) => {
                e.preventDefault();
                messageSendHandler(inputRef.current, dispatch)
            }}>

                <TextField inputRef={inputRef} rows={3} multiline className={styles.input} variant={"outlined"} label={"type something..."}/>
                <Button onClick={() => {
                    messageSendHandler(inputRef.current, dispatch)
                }}>
                    <SendOutlined style={{
                        fontSize: "30pt"
                    }}/>
                </Button>
            </form>

        </Stack>
    );
};

export default MessageInput;
