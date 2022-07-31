import type {NextApiRequest, NextApiResponse} from 'next'
import Axios from 'axios';
const getAvatar = async (gender) => {
    const avatar = await Axios.get(`https://xsgames.co/randomusers/avatar.php?g=${gender}` , {
        responseType:"arraybuffer"
    });
    const base64Image = Buffer.from(avatar.data, 'binary').toString('base64')
    return `data:image/png;base64,${base64Image}`;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(await getAvatar("female"))
    } else {

        res.status(301).json({error: "not permitted"})
    }
}
