import React, {useRef} from 'react';
import styles from "./styles.module.scss"
import {Button, Stack, TextField} from "@mui/material";
import {SendOutlined} from "@mui/icons-material";
import {useSendMessage} from "@/app/useSocketio";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {addMessage, selectUserData} from "@/redux/messages/messagesSlice";

const messageSendHandler = (e: React.InputHTMLAttributes<HTMLInputElement>, dispatch , userId) => {
    const message = e.value;

    // const socket = useSocketIo(message)
    useSendMessage(message, () => {
        dispatch(addMessage({sender: "client", msg: message, target: userId}))
    })
    e.value = "";

}
const MessageInput = () => {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUserData)
    const inputRef = useRef(null);
    return (
        <Stack className={styles.messageInputMain} justifyContent={"center"} alignItems={"center"} height={"fit-content"} direction={"row"} spacing={1}>
            <form onSubmit={(e) => {
                e.preventDefault();
                messageSendHandler(inputRef.current, dispatch , currentUser.id)
            }}>

                <TextField inputRef={inputRef} rows={3} multiline className={styles.input} variant={"outlined"} label={"type something..."}/>
                <Button onClick={() => {
                    messageSendHandler(inputRef.current, dispatch , currentUser.id)
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
