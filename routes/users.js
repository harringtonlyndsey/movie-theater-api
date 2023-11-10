const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const number = req.params.id;
  const user = await User.findByPk(number);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const updatedUser = await User.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedUser);
});

module.exports = router;
