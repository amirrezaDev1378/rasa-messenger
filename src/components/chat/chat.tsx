import React from 'react';
import {Avatar, Stack, Typography} from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

interface ChatProps {
    text: string,
    avatar: string,
    name: string,
    isLocalUser: boolean,

}

export const changeIdColor = (text: string): string => {
    return text.replaceAll(/(#+[a-zA-Z0-9A-Za-zÀ-ÖØ-öø-ʸ(_)]{1,})/ig, (match) => {

        return ReactDOMServer.renderToStaticMarkup(<p className={styles.hashtag}>{match}</p>);

    });
}
export const addLineBreak = (text: string): string => {
    console.log(text)
    return text.split(" ").map((item, index) => {
        if ((index+1) % 8 === 0) {
            return item + "<br>";
        }
        return item;
    }).join(" ")
}
const Chat: React.FC<ChatProps> = ({text, avatar, name, isLocalUser,}) => {

    const flexDirection = isLocalUser ? "row-reverse" : "row";
    const mainDir = isLocalUser ? "rtl" : "ltr";
    const ml = isLocalUser ? "auto" : "initial";
    const localUserStyle = isLocalUser ? styles.localUser : "";
    return (
        <Stack ml={ml} className={`${styles.chatContainer} ${localUserStyle}`} direction={flexDirection} alignItems={"center"}>

            <Avatar className={styles.avatar} variant={"rounded"}>
                <Image datatype={"base64"} src={avatar} width={100} height={100}/>
            </Avatar>
            <Stack dir={mainDir} className={styles.chatTextContainer} direction={"column"}>

                <Typography component={'span'} className={styles.chatUserName} variant={"h3"}>
                    {name}

                </Typography>
                <Typography component={'span'} dir={"ltr"} className={styles.chatText} variant={"body1"}>
                    {parse(changeIdColor((text.toString())))}
                </Typography>
            </Stack>


        </Stack>
    );
};

export default Chat;
