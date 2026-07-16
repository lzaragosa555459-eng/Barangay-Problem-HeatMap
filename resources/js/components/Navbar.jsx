import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiMapPin,
    FiFileText,
    FiLogOut,
    FiUsers,
    FiSettings,
    FiLayers,
    FiGrid,
    FiUser
} from "react-icons/fi";

import {
    FaFire,
    FaChartBar
} from "react-icons/fa";

import {
    MdLocationCity
} from "react-icons/md";
import logo from "../../images/logoBG.png";
export default function Navbar() {
    return (
        <div className="sidebar">

        <div
            style={{
                backgroundColor: "#14532D",
                display: "flex",
                alignItems: "center",      // Vertical alignment
                justifyContent: "center",  // Center the whole group
                gap: "12px",
                marginBottom: "20px",
                width: "100%",
            }}
        >
            <img
                src={logo}
                alt="BCPM Logo"
                style={{
                    width: "100px",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                }}
            />

           {/* <h2
                style={{
                    margin: 0,
                    color: "white",
                    fontWeight: "700",
                    lineHeight: 1,
                    padding: 20
                }}
            >
                BCPM
            </h2>*/}
        </div>

            <ul>
                <li>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiUser style={{ marginRight: "10px" }} />
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiGrid style={{ marginRight: "10px" }} />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/user-management"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiUsers style={{ marginRight: "10px" }} />
                        User Management
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/barangay-management"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <MdLocationCity style={{ marginRight: "10px" }} />
                        Barangay Management
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/problem-category-management"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiLayers style={{ marginRight: "10px" }} />
                        Problem Categories
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/analytics"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FaChartBar style={{ marginRight: "10px" }} />
                        Analytics
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
                        Marker Map
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
                        <FiFileText style={{ marginRight: "10px" }} />
                        Reports
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiSettings style={{ marginRight: "10px" }} />
                        Settings
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiLogOut style={{ marginRight: "10px" }} />
                        Logout
                    </NavLink>
                </li>
            </ul>

        </div>
    );
}