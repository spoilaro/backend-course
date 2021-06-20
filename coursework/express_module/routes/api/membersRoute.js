const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  const found = members.some((mem) => mem.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((mem) => mem.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Not found with id of " + req.params.id });
  }
});

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Name and email not given" });
  }

  members.push(newMember);
  res.json(members);
  //res.redirect("/");
});

router.put("/:id", (req, res) => {
  var id = req.params.id;
  const found = members.some((mem) => mem.id === parseInt(req.params.id));

  if (found) {
    const updateMember = req.body;
    members.forEach((mem) => {
      if (mem.id === parseInt(req.params.id)) {
        mem.name = updateMember.name ? updateMember.name : mem.name;
        mem.email = updateMember.email ? updateMember.email : mem.email;

        res.json({ msg: "Member was updated", mem });
      }
    });
  } else {
    res.status(400).json({ msg: "Not found with id of " + req.params.id });
  }
});

router.delete("/:id", (req, res) => {
  var id = req.params.id;
  const found = members.some((mem) => mem.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter((mem) => mem.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ msg: "Not found with id of " + req.params.id });
  }
});

module.exports = router;
