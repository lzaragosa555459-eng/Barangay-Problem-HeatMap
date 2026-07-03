import { useState } from "react";
import api from "../services/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("/login", {
                email,
                password,
            });

            console.log(response.data);

            alert("Login Successful!");

        } catch (error) {

            console.error(error.response?.data);

            alert("Invalid Email or Password");

        }
    };

    return (
        <div>
            <h1>Barangay Community Problem Monitoring</h1>

            <form onSubmit={handleLogin}>
                <label>Email</label>
                <br />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <label>Password</label>
                <br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}