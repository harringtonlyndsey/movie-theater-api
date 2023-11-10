const express = require("express");
const router = express.Router();
router.get("/shows", (req, res) => {
  res.send("hello");
});
module.exports = router;
