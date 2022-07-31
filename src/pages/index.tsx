import type {NextPage} from 'next'
import Head from 'next/head'


import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {useCheckUser} from "@/app/hooks";
import {Grid, Stack} from "@mui/material";
import RecentMessages from "@/components/layout/recentMesseages";
import ChatSection from "@/components/layout/chatSection";


const IndexPage: NextPage = () => {
    const IsLocalUserAvailable = useCheckUser();
    const router = useRouter();
    const [users, setUsers] = useState(null);
    const [localUser, setLocalUser] = useState(null);

    useEffect(() => {
        if (!IsLocalUserAvailable) {
            router.push("/createNewSession");
            return;
        }
        setLocalUser(JSON.parse(localStorage.getItem("LocalUser")));
        setUsers(JSON.parse(localStorage.getItem("Users")));

    }, []);


    return (
        <div>

            <Head>
                <title>RASA MESSENGER</title>
            </Head>

            {localUser &&

            <Grid container direction={"row"}>
                <Grid item md={3}>

                    <RecentMessages/>
                </Grid>
                <Grid item md={9}>


                    <ChatSection/>
                </Grid>
            </Grid>

            }

        </div>
    )
}

export default IndexPage
