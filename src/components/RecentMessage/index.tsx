import React from 'react';
import {Avatar, Badge, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {useGetUserInfoById} from "@/app/useGetUserInfo";
import styles from "./styles.module.scss"
import {changeCurrentChat, changeCurrentChatUser} from "@/redux/messages/messagesSlice";
import {useAppDispatch} from "@/app/hooks";

interface messageType {
    message: {
        id: number,
        messages: [{
            isLocalUser: boolean,
            msg: string
        }],
    };
}

const RecentMessage: React.FC<messageType> = (message) => {
    const lastMessage = message.message.messages[message.message.messages.length - 1].msg.slice(0, 60);
    const userInfo = useGetUserInfoById(message.message.id);
    const dispatch = useAppDispatch();
    if (!userInfo || !lastMessage) {
        return (<>
        </>)
    }
    return (
        <Stack onClick={() => {
            dispatch(changeCurrentChat(message.message.id)).then(
                () => {
                    dispatch(changeCurrentChatUser(message.message.id));
                }
            )
        }} className={styles.recentMessageBox} direction={"row"} spacing={2}>

            <Badge
                classes={{root: styles.badgeRoot, badge: styles.badge}}
                anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                badgeContent={"  "}
                color={"success"}
            >
                <Avatar className={styles.avatar} variant={"rounded"}>
                    <Image datatype={"base64"} src={userInfo.avatar} width={200} height={200}/>
                </Avatar>
            </Badge>

            <Stack direction={"column"}>
                <Typography variant={"h3"}>
                    {userInfo.name}
                </Typography>
                <Typography pt={1} variant={"body2"}>
                    {lastMessage}
                </Typography>

            </Stack>

        </Stack>
    );


};

export default RecentMessage;
