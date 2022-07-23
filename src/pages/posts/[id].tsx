import React, {useState} from 'react';
import {useRouter} from "next/router";
import Post from "../../features/posts/Post";

const page = (props) => {
    const pageInfo = useRouter();
    const targetID = pageInfo.query.id;
    return (
        <div>

            <Post id={targetID}/>

        </div>
    );
};

export default page;
