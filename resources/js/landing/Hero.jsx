import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section>

            <h1>
                Barangay Heatmap Problem Reporting System
            </h1>

            <p>
                Report community concerns, monitor their progress,
                and help improve your barangay through a centralized
                digital reporting platform.
            </p>

            <div>
                <Link to="/request-account">
                    Request an Account
                </Link>

                <Link to="/login">
                    Sign In
                </Link>
            </div>

        </section>
    );
}
