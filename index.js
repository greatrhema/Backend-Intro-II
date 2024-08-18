
const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`)
})



// CRUD Authentication

app.get("/", (request, response)=>{
    response.json("Welcome to Acces bank Server")
})


const users = [
    {
        firstName: "David",
        lastName: "Samp[sopn"
    },
    {
        firstName: "David",
        lastName: "Samp[sopn"
    },
    {
        firstName: "David",
        lastName: "Samp[sopn"
    },
]

app.get("/users", (request, response)=>{

    response.json(users)
})

app.post("/login", (request, response)=>{

    const { email, password } = request.body 

})
app.post("/login", (request, response)=>{

    const { email, password } = request.body 

})
app.post("/login", (request, response)=>{

    const { email, password } = request.body 

})
