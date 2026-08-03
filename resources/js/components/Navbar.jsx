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
    FiUser,
    FiClipboard
} from "react-icons/fi";

import {
    FaFire,
    FaChartBar
} from "react-icons/fa";

import {
    MdLocationCity
} from "react-icons/md";
import logo from "../../images/logoBG.png";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
    const [settings, setSettings] = useState({
        system_name: "",
        system_logo: "",
    });
    const [roles, setRoles] = useState([]);
    
    const fetchSettings = async () => { 

        api.get("/settings")
            .then((response) => {

                setSettings(response.data);
            })
        api.get("/role")
            .then((response) => {

                setRoles(response.data);
                

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
        <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>

        <div
            style={{
                backgroundColor: "#14532D",
                display: "flex",
                alignItems: "center",      // Vertical alignment
                justifyContent: "center",  // Center the whole group
                gap: "12px",
                marginBottom: "30px",
                width: "100%",
            
            }}
        >   
            
            <img
                src={`http://127.0.0.1:8000/storage/${settings.system_logo}`}
                alt="Logo"
                className="system-logo"
                style={{height:"60px"}}
            />
            <p>{settings.system_name}</p>


        </div>

            <ul>
                <li>
                    <NavLink
                        to="/profile"
                        onClick={() => setSidebarOpen(false)}
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
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiGrid style={{ marginRight: "10px" }} />
                        Dashboard
                    </NavLink>
                </li>
                {roles.role === 'Barangay Official' ? <li hidden></li> : 
                    <li>
                        <NavLink
                            to="/reports"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <FiFileText style={{ marginRight: "10px" }} />
                            Reports
                        </NavLink>
                    </li>
                }
                {roles.role === 'Citizen' ? <li hidden></li> : (
                    <>
                        <li>
                            <NavLink
                                to="/assignments"
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <FiClipboard style={{ marginRight: "10px" }} />
                                Assignments
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/user"
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <FiUsers style={{ marginRight: "10px" }} />
                                User Management
                            </NavLink>
                        </li>
                    </>
                )}
                {['Barangay Official', 'Citizen'].includes(roles.role) ? <li hidden></li> : 
                    <li>
                        <NavLink
                            to="/barangay"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <MdLocationCity style={{ marginRight: "10px" }} />
                            Barangay Management
                        </NavLink>
                    </li>
                }
                {['Barangay Official', 'Citizen'].includes(roles.role) ? null : 
                    <li>
                        <NavLink
                            to="/problem-category"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <FiLayers style={{ marginRight: "10px" }} />
                            Problem Categories
                        </NavLink>
                    </li>
                }
                {roles.role === 'Citizen' ? <li hidden></li> : (
                    <li>
                        <NavLink
                            to="/analytics"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <FaChartBar style={{ marginRight: "10px" }} />
                            Analytics
                        </NavLink>
                    </li>                   
                )}
                <li>
                    <NavLink
                        to="/markmap"
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <FiMapPin style={{ marginRight: "10px" }} />
                        Marker Map
                    </NavLink>
                </li>
                {roles.role === 'Citizen' ? <li hidden></li> : (
                    <li>
                        <NavLink
                            to="/heatmap"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <FaFire style={{ marginRight: "10px" }} />
                            Heatmap
                        </NavLink>
                    </li>
                )}


                
                {
                    ['Barangay Official', 'Citizen'].includes(roles.role) ? 
                    <li hidden>
                        {/*hide settings if the user is barangay official or citizen*/}
                    </li>
                    : 
                    <li>
                        <NavLink
                            to="/settings"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <FiSettings style={{ marginRight: "10px" }} />
                            Settings
                        </NavLink>
                    </li>
                }


                <li>
                    <NavLink
                        to="/"
                        onClick={() => setSidebarOpen(false)}
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