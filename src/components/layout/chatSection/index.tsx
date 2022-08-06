import React, {useEffect, useState} from 'react';
import {Grid, Skeleton} from "@mui/material";
import ChatHeader from "@/components/layout/chatSection/header/header";
import ChatMain from "@/components/layout/chatSection/chatMain/chatMain";
import styles from "./styles.module.scss";
import MessageInput from "@/components/messageInput";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {selectData} from "@/redux/messages/messagesSlice";

interface currentChat {
    messages: {
        messages: Array<any>,
    };
    status: string,
    currentUser: any,

}

const ChatSection: React.FC = () => {
    const pageData = useAppSelector(selectData)
    const dispatch = useAppDispatch();
    const [currentChat, setCurrentChat] = useState<currentChat>(null);

    useEffect(() => {
        if (pageData.messages && pageData.currentUser) {
            setCurrentChat({status: pageData.status, messages: JSON.parse(pageData.messages), currentUser: JSON.parse(pageData.currentUser)})
        }
    }, [pageData]);
    return (
        !currentChat?.messages ?
            <>
                <Skeleton animation={"wave"} variant={"rectangular"} width={"100%"} height={"100%"}/>
            </>
            :
            <Grid width={"100%"} height={"100%"} container direction={"column"}>
                <Grid item width={"100%"}>
                    <ChatHeader/>

                </Grid>

                <Grid md={9} className={styles.chatMainGrid} container position={"fixed"} item>

                    <ChatMain currentChat={currentChat}/>
                    <MessageInput/>
                </Grid>
            </Grid>
    );
};

export default ChatSection;
