import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const Mongo_Url = process.env.Mongo_URL;

//MYSql connection
async function createMongoConnection() {
  const Client = new MongoClient(Mongo_Url);
  await Client.connect();
  console.log("Mongo is connected");
  return Client;
}
export const Client = await createMongoConnection();
//Mongo_URL=mongodb+srv://abhaysharma136:8854892348absh@cluster0.dfdpejd.mongodb.net
// PORT=4000
