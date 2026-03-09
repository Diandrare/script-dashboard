const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// menerima data dari script Roblox
app.post("/log", (req, res) => {
    users.push(req.body);
    console.log("User logged:", req.body);
    res.send("ok");
});

// mengirim data ke dashboard
app.get("/data", (req, res) => {
    res.json(users);
});

// menampilkan website dashboard
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
