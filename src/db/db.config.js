import { MongoClient } from "mongodb";

export const client = new MongoClient(
    process.env.DB_URI.replace('<db_password>', process.env.DB_PASS)
);

export const db = client.db('skillsphere-auth');