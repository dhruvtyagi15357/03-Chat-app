const express = require("express");
const { login, signup, signout } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from authRoutes.js");
});

router.post("/signup", signup);

router.post("/signin", login);

router.post("/signout", signout);

module.exports = router;
