import type {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios';
import {randText} from '@ngneat/falso';


const getRandomMessages = async () => {
    let messages = [];
    for (let i = 0; i < 25; i++) {
        messages.push({userId: i + 1, messages: []});
        messages[i].messages.push(randText({length: 5 + Math.floor(Math.random() * 4), charCount: 100 + Math.floor(Math.random() * 50)}));
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
