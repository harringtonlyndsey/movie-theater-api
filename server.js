const express = require("express");
const app = express();
const { User } = require("./models/");
const PORT = 3000;

app.listen(PORT, () => {
  db.sync();
  console.log(`Server running on port: http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const number = req.params.id;
  const user = await User.findByPk(number);
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  const updatedUser = await User.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedUser);
});

app.get("/shows", async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

app.get("/shows/:id", async (req, res) => {
  const number = req.params.id;
  const show = await Show.findByPk(number);
  res.json(show);
});

app.delete("/shows/:id", async (req, res) => {
  const deletedShow = await Show.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedShow);
});

app.put("/shows/:id", async (req, res) => {
  const updatedShow = await Show.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedShow);
});
