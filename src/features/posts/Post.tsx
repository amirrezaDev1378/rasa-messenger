import React, {useCallback, useEffect, useMemo, useState} from 'react'

import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {
    getPostData,
    selectData
} from './postsSlice'
import styles from './Posts.module.scss'
import Head from "next/head";
import Image from "next/image";
import {vitrinLogo} from "../../assets/"
import {CircularProgress, Stack, Typography} from "@mui/material";
import Link from "next/link";

function Post(id) {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [haveError, setHaveError] = useState(false)
    const pageData = useAppSelector(selectData)


    //
    if (id.id && isLoading) {

        dispatch(getPostData(id)).then((data) => {
            if (data.type === "posts/getPost/rejected") {
                {
                    setHaveError(true)
                }
            } else {

                setIsLoading(false)
            }
        })


    }
    const requestStatus = JSON.parse(pageData.postData).status
    if (haveError) {
        return (
            <>
                {requestStatus === 404 ?
                    <h1>"404" error the post you are looking for can't be found!</h1>
                    :
                    <h1>"error while loading data be sure you are connected to internet!"</h1>

                }
            </>
        )
    }
    if (!isLoading) {
        const data = JSON.parse(pageData.postData).resData;
        return (
            <>
                <Head>
                    <title>
                        {data.title}
                    </title>
                    <meta name={"description"} content={data.body}/>
                </Head>
                <Stack mt={10} direction={"column"} spacing={5} justifyContent={"center"} alignItems={"center"}>

                    <Link href={"/"}>
                        <Image
                            style={{
                                cursor: "pointer"
                            }}
                            src={vitrinLogo}
                            priority
                            loading={"eager"}
                            alt={"vitrin"}
                        />
                    </Link>

                    <Typography className={styles.header} variant={"h1"}>{data.title}</Typography>

                    <Typography className={styles.bodyText} variant={"h3"}>{data.body}</Typography>
                </Stack>
            </>
        )
    }

    if (isLoading || pageData.status === "loading") {
        return <>

            <CircularProgress color={"info"}/>
        </>
    }

}

export default Post
