const express = require("express");
const { sendMessage } = require("../controllers/message.controller");
const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from messageRoutes.js");
});

// router.post("/signup", signup);
// router.post("/signin", login);
// router.post("/signout", signout);

router.post("/send/:id", protectRoute, sendMessage)


module.exports = router;
