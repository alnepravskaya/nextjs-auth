import { MongoClient } from 'mongodb';

export const connectDB = async () => {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ggqoqr6.mongodb.net/auth-demo?retryWrites=true&w=majority`
    );

    return client;
};
