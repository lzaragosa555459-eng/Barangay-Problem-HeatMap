import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Heatmap from "./pages/Heat Map/Heatmap";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Markmap from "./pages/Incident Map/Markmap";
import UserManagement from "./pages/UserManagement";
import BarangayManagement from "./pages/BarangayManagement";
import ProblemCategoryManagement from "./pages/ProblemCategoryManagement";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Maintenance from "./pages/Maintenance";
import Assignments from "./pages/Assignment";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useEffect } from "react";
import api from "./services/api";

function AdminLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="container">

            <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            {sidebarOpen && (
                <div
                    className="overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <button
                className="menu-btn"
                onClick={() => setSidebarOpen(true)}
            >
                <FiMenu />
            </button>

            <div
                className={`content ${
                    sidebarOpen ? "sidebar-open" : ""
                }`}
            >
                <Routes>

                    {/*private page*/ }
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/user" element={<UserManagement />} />
                    <Route path="/barangay" element={<BarangayManagement />} />
                    <Route path="/problem-category" element={<ProblemCategoryManagement />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/markmap" element={<Markmap />} />
                    <Route path="/heatmap" element={<Heatmap />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/assignments" element={<Assignments />} />
                    <Route path="/settings" element={<Settings />} />    
 
                </Routes>

            </div>

        </div>
    );
}

export default function App() {


    useEffect(() => {

        api.get("/settings")
            .then((response) => {
                document.body.className =
                    response.data.theme + "-theme";
            });

    }, []);

    return (
        <BrowserRouter>
        
            <Routes>
        
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/maintenance" element={<Maintenance />} />  

                <Route path="/*" element={<AdminLayout />} />

            </Routes>

        </BrowserRouter>
    );
}
