import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Heatmap from "./pages/Heat Map/Heatmap";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Markmap from "./pages/Incident Map/Markmap";


function AdminLayout() {
    return (
        <div className="container">

            <Navbar />

            <div className="content">
                <Routes>

                    {/*private page*/ }
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/markmap" element={<Markmap />} />
                    <Route path="/heatmap" element={<Heatmap />} />
                    <Route path="/reports" element={<Reports />} />
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