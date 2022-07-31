import React from 'react';
import {Grid, Stack} from "@mui/material";
import ChatHeader from "@/components/layout/chatSection/header/header";
import ChatMain from "@/components/layout/chatSection/chatMain/chatMain";
import styles from "./styles.module.scss";
const ChatSection: React.FC = () => {
    return (
        <Grid width={"100%"} height={"100%"} container direction={"column"}>
            <Grid item width={"100%"}>
                <ChatHeader/>

            </Grid>

            <Grid md={9} className={styles.chatMainGrid} container position={"fixed"} item >

                <ChatMain/>
            </Grid>
        </Grid>
    );
};

export default ChatSection;
