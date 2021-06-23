import express, { Application, Request, Response } from "express";
const mongoose = require("mongoose");
require("dotenv").config();

//Routes
const userRoute = require("./Routes/UserRoute");

//Model
const User = require("./Models/User");

//App init and middleware
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use routes
app.use("/", userRoute);

//Connect to database
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (): void => {
  console.error("Error connecting to database");
});
db.once("open", (): void => {
  console.log("Database connected");
});

//Run server
const PORT = process.env.PORT || 3001;

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ msg: "This is working" });
});

//Create user

app.listen(PORT, (): void => {
  console.log("Server is running!");
});
