import type {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios';
import {randEmail, randFullName} from '@ngneat/falso';


function getRandomDate() {
    const fromTime = new Date('2022-04-12T01:57:45.271Z').getTime();
    const toTime = new Date(Date.now()).getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const getAvatar = async (gender) => {
    const avatar = await Axios.get(`https://xsgames.co/randomusers/avatar.php?g=${gender}` , {
        responseType:"arraybuffer"
    });
    const base64Image = Buffer.from(avatar.data, 'binary').toString('base64')
    return `data:image/png;base64,${base64Image}`;
}
const getRandomUsers = async () => {
    let users = [];
    let gender;
    for (let i = 0; i < 25; i++) {
        if (i % 2 == 0 || i % 3 == 0) {
            gender = "female"
        } else {
            gender = "male"
        }
        users.push({
            email: randEmail(),
            name: randFullName({gender}),
            lastTimeVisited: getRandomDate(),
            avatar: await getAvatar(gender)
        })
    }
    return users;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(await getRandomUsers())
    } else {

        res.status(301).json({error: "not permitted"})
    }
}
