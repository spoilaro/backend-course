import express, { Response, Request } from "express";
import { NextFunction } from "express-serve-static-core";
const User = require("../Models/User");

const router = express.Router();

type Req = {
  [key: string]: any;
};

//Create user
router.post("/", async (req: Request, res: Response): Promise<Response> => {
  const user = new User({
    name: req.body.name,
  });
  try {
    const newUser = await user.save();
    return res.status(200).json({ msg: "Added new user", user: newUser });
  } catch (error:any) {
    return res.status(400).json({ msg: error.message });
  }
});

//Delete User
router.delete("/:id", getUser, async (req: Req, res: Response): Promise<Response> => {
  
  try {
    await req.user.remove();
    return res.status(200).json({ msg: "User deleted"});
  } catch (error:any) {
    return res.status(400).json({ msg: error.message });
  }
});

//Get all
router.get("/", async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error:any) {
    res.status(500).json({ msg: error.message });
  }
});

//Add item
router.patch("/:id", getUser, async (req: Req, res: Response) => {
  try {
    //const user = await User.findById(req.params.id);
    const newItem = { name: req.body.newItem };

    const currentItems = req.user.items;
    currentItems.push(newItem);

    req.user.items = currentItems;
    const updatedUser = await req.user.save();
    res.json(updatedUser);
  } catch (error:any) {
    res.status(400).json({ msg: error.message });
  }
});

//Update

router.patch("/update/:id", getUser, async (req: Req, res: Response): Promise<Response> => {
  if (req.body.name != null) {
    req.user.name = req.body.name;
  }
  try {
    const updatedUser = await req.user.save();
    return res.status(200).json({ msg: "User updated", user: updatedUser });
  } catch (error:any) {
    return res.status(400).json({ msg: error.message });
  }
});

async function getUser(req: Req, res: Response, next: NextFunction) {
  let user: typeof User;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ msg: "Can't find user" });
    }
  } catch (error:any) {
    return res.status(500).json({ msg: error.message });
  }
  req.user = user;
  next();
}

module.exports = router;
