import { useEffect, useState } from "react";
import api from "../services/api";
import {
    FiImage,
    FiMapPin,
    FiDatabase,
    FiRefreshCw,
    FiTool
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Settings() {
    const navigate = useNavigate();

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

                document.body.className = response.data.theme + "-theme";
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

    const saveSettings = async () => {

        try {

            await api.put("/settings", settings);

            alert("Settings updated successfully!");

        } catch (error) {

            console.error(error);

            alert("Failed to update settings.");

        }
        
    };
    const uploadLogo = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("logo", file);

        try {

            const response = await api.post(
                "/settings/logo",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setSettings(response.data.settings);

            alert("Logo updated successfully!");

        } catch (error) {

            console.error(error);

            alert("Failed to upload logo.");

        }

    };
    return (
        <div className="reports-container">

            <div className="reports-header">
                <h1>{settings.system_name}</h1>
                <p>Manage your Barangay Heat Project configuration.</p>
            </div>

            <div
                style={{
                    
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,.08)",
                    padding: "30px",
                    marginTop: "25px",

                }}
                className="setting-card"
            >
            {/* General Settings */}

            <h2 style={{ marginBottom: "20px" }}>
                General Settings
            </h2>

            <div className="setting-row">

                <div>
                    <h3>System Name</h3>
                    <p>Name displayed throughout the system.</p>
                </div>

                <input
                    type="text"
                    value={settings.system_name || ""}
                    onChange={(e) =>
                        setSettings({
                            ...settings,
                            system_name: e.target.value,
                        })
                    }
                    className="setting-input"
                />

            </div>

            <hr />

            <div className="setting-row">

                <div>
                    <h3>Theme</h3>
                    <p>Select the system theme.</p>
                </div>

                <select
                    value={settings.theme}
                    onChange={(e)=>{

                        setSettings({
                            ...settings,
                            theme:e.target.value
                        });

                        document.body.className = e.target.value + "-theme";

                    }}
                    className="setting-input"
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>

            </div>

            <hr />
                {/* Logo */}
                <div className="setting-row">

                    <div>
                        <h3><FiImage /> System Logo</h3>
                        <p>Upload or replace the official system logo.</p>
                    </div>

                    <input
                        type="file"
                        id="logoInput"
                        accept="image/*"
                        hidden
                        onChange={uploadLogo}
                    />
                    <div>

                    </div>
                    <div className="logo-container">
                        <img
                            src={`http://127.0.0.1:8000/storage/${settings.system_logo}`}
                            alt="Logo"
                            className="system-logo"
                        />

                        <button
                            className="btn-primary"
                            onClick={() => document.getElementById("logoInput").click()}
                        >
                            Change Logo
                        </button>
                    </div>


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

                    <button className="btn-primary" onClick={()=>navigate("/barangay-management")}>
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

                <div
                    style={{
                        marginTop: "30px",
                        textAlign: "right",
                    }}
                    className="settings-footer"
                >
                    <button
                        className="btn-success"
                        onClick={saveSettings}
                    >
                        Save Changes
                    </button>
                </div>

            </div>

        </div>
    );
}