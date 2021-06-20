const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Connect to database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

//Express
const app = express();
app.use(express.json());

const dummyRouter = require("./routes/dummies");
app.use("/dummies", dummyRouter);

app.listen(3000, () => {
  console.log(`Server is running in port`);
});
