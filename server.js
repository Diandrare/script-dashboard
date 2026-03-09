const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/log", (req, res) => {

  const data = {
    username: req.query.username,
    userid: req.query.userid,
    placeid: req.query.placeid,
    time: req.query.time
  };

  users.push(data);

  console.log("User:", data);

  res.send("logged");

});

app.get("/data", (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
