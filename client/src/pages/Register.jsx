import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
const Register = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function submit(e) {
        e.preventDefault()
        const data = await axios.post("http://localhost:8080/register", {
            name,
            email,
            password,
            phone
        })

        console.log(data)
    }

    
    return (
        <div className="container">
            <div className="tabs">
                <button className="tab active">Login</button>
                <button className="tab">Sign Up</button>
            </div>

            <form onSubmit={(e) => submit(e)} id="loginForm">
                <label>Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" required />

                <label>Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" required />
                <label>Phone Number</label>
                <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Enter your phone number" required />

                <div className="password-header">
                    <label>Password</label>
                    <a href="#" className="forgot">Forgot password?</a>
                </div>

                <div className="password-box">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" required />
                    <span id="togglePassword">👁</span>
                </div>

                <button type="submit" className="login-btn">Sign Up</button>
            </form>

            <div className="divider">OR</div>

            <div className="social-login">
                <button className="social google">Continue with Google</button>
            </div>

            <p className="signup-text">
                Don’t have an account yet? <a href="./index.html">Sign up</a>
            </p>
        </div>
    )
}

export default Register