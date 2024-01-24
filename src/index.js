const express = require("express")

const app = express()

app.use(express.json())


app.get("/projects", (req, res) => {
    return res.json([
        "projeto 1",
        "projeto 2",
    ])
})

app.post("/projects", (req, res) => {
    const body = req.body;

    console.log(body)

    return res.json([
        "projeto 1",
        "projeto 2",
        "projeto 3",
    ])
  
})

app.put("/projects/:id", (req, res) => {
    return res.json([
        "projeto 4",
        "projeto 2",
        "projeto 3",
    ])
  
})


app.delete("/projects/:id", (req, res) => {
    return res.json([
        "projeto 2",
        "projeto 3",
    ])
  
})

app.listen(3000, () => {
    console.log(" 🚀🚀🚀 Server is running on port 3000")
})


