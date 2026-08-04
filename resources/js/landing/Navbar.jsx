import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import api from "../services/api";

export default function Navbar() {

    const [settings, setSettings] = useState({
        system_name: "",
        system_logo: "",
    });

    const fetchSettings = async () => { 

        api.get("/settings")
            .then((response) => {

                setSettings(response.data);
            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });
    };

    useEffect(() => {

        fetchSettings();

        const refresh = () => fetchSettings();

        window.addEventListener("settingsUpdated", refresh);

        return () => {
            window.removeEventListener("settingsUpdated", refresh);
        };

    }, []);

    return (

        <header className="navbar">

            <div className="logo">

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",      // Vertical alignment
                        justifyContent: "center",  // Center the whole group
                        gap: "4px",
                        marginBottom: "30px",
                        width: "100%",
                        marginTop: "10%",
                    }}
                >   
                    
                    <img
                        src={`http://127.0.0.1:8000/storage/${settings.system_logo}`}
                        alt="Logo"
                        className="system-logo"
                        style={{height:"60px"}}
                    />
                    
                    <h2>{settings.system_name}</h2>


                </div>

            </div>

            <nav>

                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#workflow">Workflow</a>
                <a href="#contact">Contact</a>

            </nav>

            <div className="nav-buttons">

                <Link
                    to="/login"
                    className="login-btn"
                >
                    Sign In
                </Link>

                <Link
                    to="/request-account"
                    className="register-btn"
                >
                    Request Account
                </Link>

            </div>

        </header>

    );

}