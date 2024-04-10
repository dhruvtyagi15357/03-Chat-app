const express = require("express");

const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from uesrRoutes.js");
});

module.exports = router;
