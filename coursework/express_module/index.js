//Imports
const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./middleware/logger");

//ROutes
const memberRoute = require("./routes/api/membersRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", memberRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
