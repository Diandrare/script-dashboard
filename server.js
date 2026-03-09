const express = require("express")
const app = express()

app.use(express.json())

let users = []

app.post("/log",(req,res)=>{
    users.push(req.body)
    console.log("User:", req.body)
    res.send("ok")
})

app.get("/data",(req,res)=>{
    res.json(users)
})

app.use(express.static("public"))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)
})
