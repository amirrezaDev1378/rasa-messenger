import React from 'react';
import {Avatar, Badge, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {useGetUserInfoById} from "@/app/useGetUserInfo";
import styles from "./styles.module.scss"

interface messageType {
    message: {
        userId: number,
        messages: Array<string>,
    };
}

const RecentMessage: React.FC<messageType> = (message) => {
    const lastMessage = message.message.messages[0][message.message.messages.length].slice(0,80);
    const userInfo = useGetUserInfoById(message.message.userId);
    return (
        <Stack  className={styles.recentMessageBox} direction={"row"} spacing={2}>
            {userInfo &&
            <>
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
                    <Typography  variant={"h3"}>
                        {userInfo.name}
                    </Typography>
                    <Typography pt={1} variant={"body2"}>
                        {lastMessage}
                    </Typography>

                </Stack>
            </>


            }

        </Stack>
    );
};

export default RecentMessage;
