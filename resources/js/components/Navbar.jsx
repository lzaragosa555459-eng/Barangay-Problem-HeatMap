import { NavLink } from "react-router-dom";
import { FiHome, FiMapPin, FiFileText, FiLogOut } from "react-icons/fi";
import { FaFire } from 'react-icons/fa';
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