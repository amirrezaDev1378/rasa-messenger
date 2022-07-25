import React, {useEffect} from 'react';
import {NextPage} from "next";
import {useCheckUser} from "../../app/hooks";
import {useRouter} from "next/router";
import useCreateSession from "../../app/useCreateSession";

const Session:NextPage = () => {
    const IsLocalUserAvailable = useCheckUser();
    const router = useRouter();
    useEffect(() => {
        if (IsLocalUserAvailable) {
            router.push("/");
        }else{
            const session = useCreateSession();
            session.then((message) => {
                console.log(message);
                router.push("/");
            }).catch((error) => {
                console.error(error);
                alert("Error creating session , view console for more details");
            })

        }
    }, []);
    return (
        <div>
            <h1>Session</h1>
        </div>
    );
};

export default Session;
