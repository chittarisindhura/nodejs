const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      const hashedPass = await bcrypt.hash(password, 10);
      // console.log(hashedPass);
      const userData = new User({
        name: name,
        email: email,
        password: hashedPass,
      });
      await userData.save();
      // console.log(userData);
      res.status(201).send({ msg: "User Added Successfully" });
    } else {
      res.status(409).send({ msg: "User already exits" });
    }

    // console.log(success);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
