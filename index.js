
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const connectDB = require("./db")
const Students = require("./studentModel")

dotenv.config()


const app = express()

// Middleware
app.use(express.json())

const PORT = process.env.PORT || 5000


// Connect MongoDB
// mongoose.connect(`${process.env.MONGODB_URL}`)

// .then(()=> console.log("MongoDB Connected..!"))
connectDB() 


// Listen
app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`)
})



// CRUD Authentication

app.get("/", (request, response)=>{
    response.json("Welcome to Access bank Server")
})

app.post('/chibuzor', (request, response)=>{
    const { email, password } = request.body


    response.status(200).json(email)
})


app.put("/eze", (req, res)=>{

    const { name, state, age } = req.body

    if(!name){
        return res.status(400).json({message: "Please add your a name"})
    }

    return res.status(200).json({message: "Successful", name})

})

// Register API
app.post("/rrrrr", (req, res)=>{
    const { email, name, state, age, phoneNumber, cf_password, password } = req.body

    if(password !== cf_password){
        return res.status(400).json({message: "Passwords do not match"})

    }

    if(!email){
        return res.status(400).json({message: "Please add your email"})
    }

    if( age < 18){
        return res.status(400).json({message: "Please you're underage"})
    }

    if(!name){
        return res.status(400).json({message: "Please add your name"})
    }

    const newUser = { email, name, state, age, phoneNumber}

    // Save to DATABASE

    return res.status(200).json({message: "Registration Successful", newUser})
})

// Edit User API
app.put("/edit_user", (req, res)=>{

    const { name, email, phoneNumber } = req.body 

    if(!email){
        return res.status(400).json({message: "Please add your email."})
    }

    // Find user o Database with that email

    // Update the old information with the new object

    const userID = Math.floor(Math.random() * 100)

    const date = new Date()

    const newUser = {
        name,
        email,
        userID,
        phoneNumber,
        date_Of_Registration: date
    }

    return res.status(200).json({
        message: "Reg Successful", 
        user: newUser
    })

})



// Real C R U D

app.post("/register", async (req, res)=>{
    const {firstName, lastName, age, email, password } = req.body

    if(!email){
        return res.status(400).json({message: "Please add your email"})
    }

    const alreadyExisting = await Students.findOne({email})

    if(alreadyExisting){
        return res.status(400).json({message: "This user already exist!"})
    }

    const newUser = new Students({firstName, lastName, age, email, password })

    await newUser.save()

    return res.status(200).json({
        message: "User Registration Successful",
        user: newUser
    })
})

app.get("/students", async (req, res)=>{

    const allStudents = await Students.find()

    return res.status(200).json({
        message: "Successful",
        count: allStudents.length,
        allStudents
    })
})










app.use((req, res)=>{
    res.status(404).json({message: "This endpoint does not exist yet!"})
})








 