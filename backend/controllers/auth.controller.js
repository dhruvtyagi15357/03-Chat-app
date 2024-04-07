const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash password here
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // profile picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const profilePicture = gender === "male" ? boyProfilePic : girlProfilePic;
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePicture,
    });

    if (newUser) {
      // generate JWT token here!
      generateTokenAndSetCookie(res, newUser._id);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const login = (req, res) => {
  try {
    console.log(req.body);
    res.send("Login");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const signout = (req, res) => {
  res.send("Signout");
};

module.exports = {
  login,
  signup,
  signout,
};
