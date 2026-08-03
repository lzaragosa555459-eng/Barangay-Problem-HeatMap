import { Link } from "react-router-dom";
import "./landing.css";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">

                <span className="hero-badge">
                    📍 Community Problem Reporting
                </span>

                <h1>
                    Barangay Heatmap
                    <span> Problem Reporting System</span>
                </h1>

                <p>
                    Report flooding, damaged roads, garbage collection,
                    power outages, and other community concerns.
                    Help your barangay become safer through a centralized
                    digital reporting platform.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/request-account"
                        className="primary-btn"
                    >
                        Request Account
                    </Link>

                    <Link
                        to="/login"
                        className="secondary-btn"
                    >
                        Sign In
                    </Link>

                </div>

            </div>

            <div className="hero-right">

                <div className="dashboard-card">

                    <div className="dashboard-top">
                        Barangay Dashboard
                    </div>

                    <div className="dashboard-content">

                        <div className="mini-card">
                            <h3>127</h3>
                            <span>Total Reports</span>
                        </div>

                        <div className="mini-card">
                            <h3>35</h3>
                            <span>Pending</span>
                        </div>

                        <div className="mini-card">
                            <h3>72</h3>
                            <span>Resolved</span>
                        </div>

                        <div className="mini-map">

                            📍 Heatmap Preview

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}