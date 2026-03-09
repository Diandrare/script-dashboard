const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/log",(req,res)=>{
    users.push(req.body);
    console.log("User:", req.body);
    res.send("ok");
});

app.get("/data",(req,res)=>{
    res.json(users);
});

app.get("/",(req,res)=>{
    res.send(`
    <html>
    <body style="background:#111;color:white;font-family:Arial">

    <h2>Roblox Script Users</h2>

    <table border="1" cellpadding="10">
    <tr>
    <th>Username</th>
    <th>UserId</th>
    <th>Game</th>
    <th>Time</th>
    </tr>

    <script>
    fetch('/data')
    .then(r=>r.json())
    .then(d=>{
        let html=''
        d.forEach(u=>{
            html+=\`
            <tr>
            <td>\${u.username}</td>
            <td>\${u.userid}</td>
            <td>\${u.placeid}</td>
            <td>\${u.time}</td>
            </tr>\`
        })
        document.write(html)
    })
    </script>

    </table>

    </body>
    </html>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log("Server running on port "+PORT);
});
