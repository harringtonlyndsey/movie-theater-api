const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
