
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number},
    email: {type: String, require: true},
    password: {type: String, require: true},

    walletBalance: {type: Number, default: 0}

})


const Students = new mongoose.model("Student", studentSchema)


module.exports = Students