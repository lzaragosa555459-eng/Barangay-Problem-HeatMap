import { useEffect, useState } from "react";
import api from "../services/api";
import {
    FiImage,
    FiMapPin,
    FiDatabase,
    FiRefreshCw,
    FiTool
} from "react-icons/fi";

export default function Settings() {
    const [settings, setSettings] = useState({
        system_name: "",
        system_logo: "",
        maintenance_mode: false,

        theme: "light",

        notification_email: true,
        notification_sms: false,

        default_latitude: "",
        default_longitude: "",

        contact_email: "",
        contact_phone: "",  
    });



    const fetchSettings = async () => {

        api.get("/settings")
            .then((response) => {

                setSettings(response.data);
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
    }, []);
    return (
        <div className="reports-container">

            <div className="reports-header">
                <h1>{settings.system_name}</h1>
                <p>Manage your Barangay Heat Project configuration.</p>
            </div>

            <div
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,.08)",
                    padding: "30px",
                    marginTop: "25px",
                }}
            >

                {/* Logo */}
                <div className="setting-row">
                    <div>
                        <h3><FiImage /> System Logo</h3>
                        <p>Upload or replace the official system logo.</p>
                    </div>

                    <button className="btn-primary">
                        Change Logo
                    </button>
                </div>

                <hr />

                {/* Barangays */}
                <div className="setting-row">
                    <div>
                        <h3><FiMapPin /> Barangay Information</h3>

                        <p>
                            Manage barangay names, locations, and population.
                        </p>
                    </div>

                    <button className="btn-primary">
                        Manage
                    </button>
                </div>

                <hr />

                {/* Database Backup */}
                <div className="setting-row">
                    <div>
                        <h3><FiDatabase /> Database Backup</h3>
                        <p>Create and download a backup of the system database.</p>
                    </div>

                    <button className="btn-success">
                        Backup
                    </button>
                </div>

                <hr />

                {/* Restore */}
                <div className="setting-row">
                    <div>
                        <h3><FiRefreshCw /> Restore Database</h3>
                        <p>Restore the system from an existing database backup.</p>
                    </div>

                    <button className="btn-warning">
                        Restore
                    </button>
                </div>

                <hr />

                {/* Maintenance */}
                <div className="setting-row">
                    <div>
                        <h3><FiTool /> Maintenance Mode<span className="status-badge disabled">Disabled</span></h3>
                        <p>
                            Temporarily disable public access while performing maintenance.
                        </p>
                    </div>

                    <label className="setting-switch">
                        <input type="checkbox" />
                        Enable
                    </label>
                </div>

            </div>

        </div>
    );
}