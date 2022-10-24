import express from "express";
import cors from "cors";
// import { SqlClient } from "./sqlConfig.js";
import { Client } from "./mongoConfig.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", function (request, response) {
  response.send("hello World!!!");
});

app.get("/movies", function (request, response) {
  response.send(movies);
});
//GET DATA from MongoDB
app.get("/moviesM/:id", async function (request, response) {
  const { id } = request.params;
  console.log(request.params, id);
  const movie = await Client.db("Onstream-db")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ msg: "Movie not found" });
});

//POST data in MongoDB
app.post("/userdata", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await Client.db("userdata").collection("User").insertOne(data);
  response.send(result);
});

//Get data from MySQL Database
app.get("/moviesS", function (request, response) {
  const data = SqlClient.query("SELECT * FROM usersdata", (err, result) => {
    if (err) {
      response.send("Error");
    } else {
      response.send(result);
    }
  });
});

//POST data from MySQL Database
app.post("/MySql/Register", function (request, response) {
  const data = { User_Email: "Abhay136", User_Password: "123456789" };
  SqlClient.query("INSERT INTO usersdata SET?", data, (err, result) => {
    if (err) throw err;
    response.send(result);
  });
});

app.listen(PORT, () => console.log(`App Started in ${PORT}`));
