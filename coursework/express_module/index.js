//Imports
const express = require("express");
const path = require("path");
const members = require("./members");
const logger = require("./middleware/logger");

const app = express();

//app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.get("/api/members/:id", (req, res) => {
  var id = req.params.id;
  const found = members.some((mem) => mem.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((mem) => mem.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Not found" });
  }
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
