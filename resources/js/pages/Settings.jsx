export default function Settings() {
    return (
        <div className="reports-container">

            <div className="reports-header">
                <h1>System Settings</h1>
                <p>Manage your Barangay Heat Project configuration.</p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "20px",
                    marginTop: "30px",
                }}
            >

                {/* Logo */}
                <div className="card">
                    <h3>🖼️ System Logo</h3>
                    <p>
                        Upload or replace the official system logo.
                    </p>

                    <button className="btn-primary">
                        Change Logo
                    </button>
                </div>

                {/* Barangay */}
                <div className="card">
                    <h3>🏘️ Barangay Information</h3>
                    <p>
                        Manage barangay names, locations, and population.
                    </p>

                    <button className="btn-primary">
                        Manage Barangays
                    </button>
                </div>

                {/* Backup */}
                <div className="card">
                    <h3>💾 Database Backup</h3>
                    <p>
                        Download a backup of the current database.
                    </p>

                    <button className="btn-success">
                        Backup Database
                    </button>
                </div>

                {/* Restore */}
                <div className="card">
                    <h3>♻️ Restore Database</h3>
                    <p>
                        Restore the database from a previous backup.
                    </p>

                    <button className="btn-warning">
                        Restore
                    </button>
                </div>

                {/* Maintenance */}
                <div className="card">
                    <h3>🛠️ Maintenance Mode</h3>

                    <p>
                        Enable maintenance mode while performing updates.
                    </p>

                    <label
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "15px",
                        }}
                    >
                        <input type="checkbox" />
                        Enable Maintenance Mode
                    </label>
                </div>

            </div>

        </div>
    );
}