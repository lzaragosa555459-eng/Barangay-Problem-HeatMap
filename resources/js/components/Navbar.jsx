import { NavLink } from "react-router-dom";
import { FiHome, FiMapPin, FiFileText, FiLogOut } from "react-icons/fi";
import { FaFire } from 'react-icons/fa';
export default function Navbar() {
    return (
        <div className="sidebar">

            <h2>BCPM</h2>

            <ul>

                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiHome style={{ marginRight: "10px" }} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/markmap"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiMapPin style={{ marginRight: "10px" }} />
                        Markermap
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/heatmap"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FaFire style={{ marginRight: "10px" }} />
                        Heatmap
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/reports"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiFileText  style={{ marginRight: "10px" }} />
                        Reports
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/login">
                        <FiLogOut style={{ marginRight: "10px" }} />
                        Logout
                    </NavLink>
                </li>

            </ul>

        </div>
    );
}