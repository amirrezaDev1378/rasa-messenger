import React, {useEffect, useState} from 'react';
import RecentMessage from "@/components/RecentMessage";
import {CircularProgress, Skeleton, Typography} from "@mui/material";
import {useLoadRecentMessages} from "@/app/useLoadRecentMessages";
import styles from "./styles.module.scss"
import {DriveFileRenameOutlineOutlined} from "@mui/icons-material";
const RecentMessages: React.FC = () => {
    const [isMessagesLoaded, setIsMessagesLoaded] = useState(false);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (!isMessagesLoaded) {
            const messageLoader = useLoadRecentMessages();
            messageLoader.then(
                (msg: Array<object>) => {
                    setMessages(msg);
                    setIsMessagesLoaded(true);
                }
            );
        }
    }, []);


    return (
        <div>
            <Typography display={"flex"} justifyContent={"space-evenly"} flexDirection={"row"} className={styles.mainBox} variant={"h2"}>

                Recent Messages <DriveFileRenameOutlineOutlined />
            </Typography>
            {
                !isMessagesLoaded ?

                    <>
                        <Skeleton height={"100vh"} style={{borderRadius: 25}} width={"100%"} animation={"wave"} variant={"rectangular"}/>
                    </>

                    :
                    <div>
                        {
                            messages.map((msg, i) => {
                                return <RecentMessage key={i} message={msg}/>
                            })
                        }

                    </div>
            }


        </div>

    );
};

export default RecentMessages;
