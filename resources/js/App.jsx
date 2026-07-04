import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Heatmap from "./pages/Heatmap";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/reports" element={<Reports />} />

                <Route path="/heatmap" element={<Heatmap />} />

            </Routes>
        </BrowserRouter>
    );
}