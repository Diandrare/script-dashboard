const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// POST logger
app.post("/log",(req,res)=>{
  users.push(req.body);
  console.log("POST:", req.body);
  res.send("ok");
});

// GET logger (untuk executor yang sulit POST)
app.get("/log",(req,res)=>{
  const u = {
    username: req.query.username,
    userid: req.query.userid,
    placeid: req.query.placeid,
    time: req.query.time
  };
  users.push(u);
  console.log("GET:", u);
  res.send("ok");
});

app.get("/data",(req,res)=>{
  res.json(users);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,"0.0.0.0",()=>{
  console.log("Server running on port "+PORT);
});
