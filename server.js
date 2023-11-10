const express = require("express");
const app = express();
const { User } = require("./models/");
const PORT = 3000;
const { db } = require("./db/connection");
const userRouter = require("./routes/users");
const showRouter = require("./routes/shows");

app.use("/users", userRouter);
app.use("/shows", showRouter);

app.listen(PORT, () => {
  db.sync();
  console.log(`Server running on port: http://localhost:${PORT}`);
});
