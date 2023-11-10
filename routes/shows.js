const express = require("express");
const router = express.Router();
const Show = require("../models/Show");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

router.get("/:id", async (req, res) => {
  const number = req.params.id;
  const show = await Show.findByPk(number);
  res.json(show);
});

router.delete("/:id", async (req, res) => {
  const deletedShow = await Show.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedShow);
});

router.put("/:id", async (req, res) => {
  const updatedShow = await Show.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedShow);
});

module.exports = router;
