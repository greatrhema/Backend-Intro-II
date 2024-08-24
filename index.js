
const express = require("express")

const app = express()

// Middleware
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`)
})



// CRUD Authentication

app.get("/", (request, response)=>{
    response.json("Welcome to Access bank Server")
})

app.post('/chibuzor', (request, response)=>{
    const { email, password } = request.body


    response.json(email)
})


app.put("/eze", (req, res)=>{

    const { name, state, age } = req.body

    if(!name){
        return res.json({message: "Please add your a name"})
    }

    return res.json({message: "Successful", name})

})


app.post("/register", (req, res)=>{
    const { email, name, state, age, phoneNumber } = req.body

    if(!email){
        return res.json({message: "Please add your email"})
    }

    if( age < 18){
        return res.json({message: "Please you're underage"})
    }

    if(!name){
        return res.json({message: "Please add your name"})
    }

    const newUser = { email, name, state, age, phoneNumber}

    // Save to DATABASE

    return res.json({message: "Registration Successful", newUser})
})





 