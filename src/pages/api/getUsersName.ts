import * as fs from "fs";
import * as path from "path";

export default function handler(req, res) {
    const users = fs.readFileSync(path.join(__dirname, "../../database/users.json") , {
        encoding:"utf-8"
    })
    res.status(200).json(users)
}
