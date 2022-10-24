import { MongoClient } from "mongodb";
const Mongo_Url = "mongodb+srv://abhaysharma136:8854892348absh@cluster0.dfdpejd.mongodb.net/?retryWrites=true&w=majority";

//MYSql connection
async function createMongoConnection() {
  const Client = new MongoClient(Mongo_Url);
  await Client.connect();
  console.log("Mongo is connected");
  return Client;
}
export const Client = await createMongoConnection();
