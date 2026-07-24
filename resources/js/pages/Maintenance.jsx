import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Maintenance() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkMaintenance = async () => {
            try {
                const response = await api.get("/maintenance");

                if (!response.data.maintenance_mode) {
                    navigate("/login"); // or "/dashboard"
                }
            } catch (error) {
                console.error(error);
            }
        };

        // Check immediately
        checkMaintenance();

        // Check every 5 seconds
        const interval = setInterval(checkMaintenance, 5000);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                background: "#f8fafc",
            }}
        >
            <h1>🚧 System Under Maintenance</h1>
            <p>
                The Barangay Heat Project is currently undergoing maintenance.
                Please try again later.
            </p>
        </div>
    );
}