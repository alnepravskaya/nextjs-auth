import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {connectDB} from "../../../lib/db";
import {verifyPassword} from "../../../lib/auth";

export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [CredentialsProvider({
        async authorize(credentials) {
           const client = await connectDB();
           const userCollection = client.db().collection("users");

           const user = await userCollection.findOne({email: credentials.email})

           if(!user) {
               throw new Error("No user found!")
           }

          const isValid = await verifyPassword(credentials.password, user.password);
           if(!isValid) {
               throw new Error("Could not log ing!")
           }

            client.close();

            return {email: user.email}

        }
    })]
});
