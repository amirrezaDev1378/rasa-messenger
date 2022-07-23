import type {NextPage} from 'next'
import Head from 'next/head'

import Counter from '../features/posts/Post'
import styles from '../styles/Home.module.scss'
import {Box, Button, Stack, TextField} from "@mui/material";
import {InputOutlined} from "@mui/icons-material";
import React, {useRef} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {vitrinLogo} from "../assets/"

const pageHandler = (ref: React.RefObject<HTMLInputElement>, router) => {
    if (ref.current?.value) {
        if (typeof Number(ref.current.value) === "number" && Number(ref.current.value) > 0 && isFinite(Number(ref.current.value))) {
            router.push(`posts/${ref.current.value}`)
        } else {
            alert("invalid post number")
        }
    } else {
        alert("please enter a post number")
    }
}

const IndexPage: NextPage = () => {
    const inputRef = useRef(null)
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>
                    vitrin task
                </title>
                <meta name={"description"} content={"this is a simple task for vitrin"}/>
            </Head>
            <Stack alignItems={"center"} justifyContent={"center"} mt={10} direction="column" spacing={2}>

                <Stack spacing={3} flexDirection={"column"} display={"flex"} width={"30%"}>

                    <Image src={vitrinLogo} priority={true} loading={"eager"}/>
                    <TextField label={"enter a post number to go!"} variant={"outlined"} title={"enter a post number to go!"} inputRef={inputRef}/>
                    <Button variant={"contained"} color={"success"} onClick={() => pageHandler(inputRef, router)} title={"go!"}>
                        go!
                    </Button>
                </Stack>

            </Stack>

        </div>
    )
}

export default IndexPage
