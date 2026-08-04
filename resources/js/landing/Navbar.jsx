import { Link } from "react-router-dom";
import "./landing.css";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="logo">

                <span className="logo-icon">📍</span>

                <div>

                    <h2>Barangay Heatmap</h2>

                    <p>Problem Reporting System</p>

                </div>

            </div>

            <nav>

                <a href="#home">Home</a>
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