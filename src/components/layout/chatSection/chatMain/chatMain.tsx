import React, {useEffect, useState} from 'react';
import {selectData} from "@/redux/messages/messagesSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {Skeleton} from "@mui/material";
import Chat from "@/components/chat/chat";
import {useGetLocalUserInfo} from "@/app/useGetUserInfo";
import styles from "../styles.module.scss";

interface chatSectionProps {
    currentChat: {
        messages: {
            messages: Array<any>
        };
        currentUser: {
            id: string,
            avatar: string,
            name: string
        };
    }

}

const ChatMain: React.FC<chatSectionProps> = ({currentChat}) => {

    const LocalUser = useGetLocalUserInfo();

    return (
        <div className={styles.chatMain}>
            {

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
