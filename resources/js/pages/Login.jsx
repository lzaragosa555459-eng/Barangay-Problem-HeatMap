import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("/login", {
                email,
                password,
            });

            const user = response.data.user;
            const token = response.data.token;

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);

            console.log(user);

            if (user.role === "Administrator") {
                navigate("/dashboard");
            }
            else if (user.role === "Barangay Official") {
                navigate("/official");
            }
            else {
                navigate("/citizen");
            }

        } catch (error) {

            console.error(error.response?.data);

            alert("Invalid Email or Password");

        }
    };

    return (
        <div className="login-page">

            <div className="login-left">

                <h1>Barangay Community Problem Monitoring</h1>

                <p>
                    A web-based platform that allows citizens to report
                    community issues while helping barangay officials
                    monitor, verify, and resolve problems efficiently.
                </p>

            </div>

            <div className="login-right">

                <form onSubmit={handleLogin}>

                    <h2>Welcome Back</h2>

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}