import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./db";
import registerInitialChecks from "./middlewares/validation";
import register from "./controllers/register";
import { DataSource } from "typeorm";

// app
const app: Express = express();
dotenv.config();
const port = 5000;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const options: cors.CorsOptions = {
  origin: "*",
};
app.use(cors(options));
app.use(express.json());

// register route
app.get("/", (req, res) => {
  return res.status(200).send("Enigma Yoga Studio");
});

app.post("/register", registerInitialChecks, register);

// initializing DB
const AppDataSource = new DataSource(config);
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) =>
    console.error("Error during Data Source initialization", err)
  );

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default AppDataSource;
