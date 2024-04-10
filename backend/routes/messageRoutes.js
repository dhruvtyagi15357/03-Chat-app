const express = require("express");
const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controller");

const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello World from messageRoutes.js");
// });

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
