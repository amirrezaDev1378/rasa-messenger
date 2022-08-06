import type {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios';
import {randText} from '@ngneat/falso';


const getRandomMessages = async () => {
    let messages = [];
    for (let i = 0; i < 25; i++) {
        messages.push({userId: i + 1, messages: []});
        for (let j = 0; j < 30; j++) {
            const dummyMessage = randText({length: 1, charCount: 85 + Math.floor(Math.random() * 50)});

            if (j % 2 === 0 || j % 3 === 0) {
                messages[i].messages.push({isLocalUser: false, msg: dummyMessage});
                messages[i].messages.push({isLocalUser: true, msg: dummyMessage});

            } else {
                messages[i].messages.push({isLocalUser: false, msg: dummyMessage});
                messages[i].messages.push({isLocalUser: false, msg: dummyMessage});

            }
        }
    }
    return messages;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(await getRandomMessages())
    } else {

        res.status(301).json({error: "not permitted"})
    }
}
