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
import { useState } from "react";
import { FiMenu } from "react-icons/fi";


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
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/barangay-management" element={<BarangayManagement />} />
                    <Route path="/problem-category-management" element={<ProblemCategoryManagement />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/markmap" element={<Markmap />} />
                    <Route path="/heatmap" element={<Heatmap />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />          
                </Routes>

            </div>

        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/*" element={<AdminLayout />} />

            </Routes>

        </BrowserRouter>
    );
}