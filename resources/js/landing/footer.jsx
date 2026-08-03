import { Link } from "react-router-dom";
import {
    FiMapPin,
    FiMail,
    FiPhone,
} from "react-icons/fi";

import "./landing.css";

export default function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">

                    <h2>
                        Barangay Heatmap
                    </h2>

                    <p>
                        A centralized web-based platform for
                        reporting, monitoring, and resolving
                        community incidents efficiently.
                    </p>

                </div>

                {/* Navigation */}

                <div className="footer-links">

                    <h3>
                        Quick Links
                    </h3>

                    <a href="#about">
                        About
                    </a>

                    <a href="#features">
                        Features
                    </a>

                    <a href="#workflow">
                        Workflow
                    </a>

                    <a href="#screenshots">
                        Screenshots
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h3>
                        Contact
                    </h3>

                    <p>

                        <FiMapPin />

                        Davao City, Philippines

                    </p>

                    <p>

                        <FiMail />

                        barangayheatmap@gmail.com

                    </p>

                    <p>

                        <FiPhone />

                        +63 912 345 6789

                    </p>

                </div>

                {/* CTA */}

                <div className="footer-action">

                    <h3>
                        Ready to Get Started?
                    </h3>

                    <p>
                        Help improve your community by reporting
                        incidents digitally.
                    </p>

                    <Link
                        to="/login"
                        className="footer-btn"
                    >
                        Sign In
                    </Link>

                </div>

            </div>

            <div className="footer-bottom">

                © {new Date().getFullYear()} Barangay Heatmap Problem Reporting System.
                All Rights Reserved.

            </div>

        </footer>

    );

}