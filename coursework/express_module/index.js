//Imports
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const members = require("./Members");

//ROutes
const memberRoute = require("./routes/api/membersRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Handlebar middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
//app.use(logger);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members,
  });
});

//app.get("/", (req, res) => {
//res.sendFile(path.join(__dirname, "public", "index.html"));
//});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", memberRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
