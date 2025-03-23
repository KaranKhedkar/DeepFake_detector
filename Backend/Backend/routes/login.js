const express = require("express");
const User = require("../database/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, userExist.password);
    if (!match) {
      return res.status(401).json({ message: "Wrong password, please try again" });
    }

    return res.status(200).json({
      message: "You are successfully logged in",
      user: { id: userExist._id, email: userExist.email },
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

