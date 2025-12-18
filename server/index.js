import express from "express"
import dotenv from "dotenv"
dotenv.config()
import userModel from "./model/user.js"
import connectDB from "./config/db.js"
import bcrypt from "bcrypt"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
connectDB()
const PORT = 8080


// Making Api's

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone
        })
        res.json({
            message: "User registered!",
            data: user
        })

    } catch (error) {
        console.log(error)
    }
})

app.get("/getAllUsers", async (req, res) => {
    try {

        const users = await userModel.find()
        res.json({
            data: users
        })
    } catch (error) {
        console.log(error)
    }
})





app.listen(PORT, () => {
    console.log("Server is running!")
})