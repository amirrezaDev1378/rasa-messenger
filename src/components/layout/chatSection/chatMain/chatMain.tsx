import React, {useEffect, useState} from 'react';
import {selectData} from "@/redux/messages/messagesSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {Skeleton} from "@mui/material";
import Chat from "@/components/chat/chat";
import {useGetLocalUserInfo} from "@/app/useGetUserInfo";
import styles from "../styles.module.scss";

const ChatMain: React.FC = () => {
    const pageData = useAppSelector(selectData)
    const dispatch = useAppDispatch();

    const [currentChat, setCurrentChat] = useState(null);

    useEffect(() => {
        if (pageData.messages && pageData.currentUser) {
            setCurrentChat({status: pageData.status, messages: JSON.parse(pageData.messages), currentUser: JSON.parse(pageData.currentUser)})
        }
    }, [pageData]);
    const LocalUser = useGetLocalUserInfo();

    return (
        <div className={styles.chatMain}>
            {
                !currentChat?.messages ?
                    <>
                        <Skeleton animation={"wave"} variant={"rectangular"} width={"100%"} height={"100%"}/>
                    </>
                    :
                    <>
                        {
                            currentChat.messages.messages.map(function (obj, i) {

                                if (obj.isLocalUser) {
                                    const avatar = LocalUser.avatar;
                                    const name = LocalUser.name;
                                    return (
                                        <Chat
                                            key={i}
                                            text={obj.msg}
                                            avatar={avatar}
                                            name={name}
                                            isLocalUser={obj.isLocalUser}
                                        />
                                    )
                                } else {
                                    const avatar = currentChat.currentUser.avatar;
                                    const name = currentChat.currentUser.name;
                                    return (
                                        <Chat
                                            key={i}
                                            text={obj.msg}
                                            avatar={avatar}
                                            name={name}
                                            isLocalUser={obj.isLocalUser}
                                        />
                                    )
                                }

                            })
                        }

                    </>
            }
        </div>
    );
};

export default ChatMain;
