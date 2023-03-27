import {connectDB} from "../../../lib/db";
import {hashPassword} from "../../../lib/auth";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        const {email, password} = data;

        if (!email || !email.includes("@") || !password) {
            res.status(422).json({message: "Invalid inputs"});
            return
        }

        const client = await connectDB();

        const db = client.db();

        const existingUser = await db.collection('users').findOne({email : email})

        if (existingUser) {
            res.status(422).json({message: "User exists already!"});
            return
        }

        const result = await db.collection('users').insertOne({
            email,
            password: await hashPassword(password)
        });

        res.status(201).json({message: "Created user", ok: true});
        client.close();
    }
}

export default handler;
