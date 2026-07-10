import { Link } from "react-router-dom";
import { FiHome, FiMapPin, FiFileText, FiLogOut } from "react-icons/fi";

export default function Navbar() {
    return (
        <div className="sidebar">

            <h2>BCPM</h2>

            <ul>

                <li>
                    <Link to="/dashboard">
                        <FiHome style={{ marginRight: "10px" }} />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/heatmap">
                        <FiMapPin style={{ marginRight: "10px" }} />
                        Heatmap
                    </Link>
                </li>

                <li>
                    <Link to="/reports">
                        <FiFileText style={{ marginRight: "10px" }} />
                        Reports
                    </Link>
                </li>

                <li>
                    <Link to="/login">
                        <FiLogOut style={{ marginRight: "10px" }} />
                        Logout
                    </Link>
                </li>

            </ul>

        </div>
    );
}