import { useEffect, useState } from "react";
import api from "../services/api";

//Dashboard
export default function Dashboard() {

    const [stats, setStats] = useState({});

    useEffect(() => {

        api.get("/dashboard")
            .then((response) => {
                setStats(response.data);
            });
            
    }, []);

    return (

        <div>

            <h1>Dashboard</h1>

                <div className="cards">

                    <div className="card">
                        <h2>{stats.totalReports}</h2>
                        <p>Total Reports</p>
                    </div>

                    <div className="card">
                        <h2>{stats.pendingReports}</h2>
                        <p>Open Cases</p>
                    </div>

                    <div className="card">
                        <h2>{stats.resolvedReports}</h2>
                        <p>Resolved Cases</p>
                    </div>

                    <div className="card">
                        <h2>{stats.criticalReports}</h2>
                        <p>High Risk Areas</p>
                    </div>

                    <div className="card">
                        <h2>{stats.totalCitizens}</h2>
                        <p>Total Citizens</p>
                    </div>

                    <div className="card">
                        <h2>{stats.totalOfficials}</h2>
                        <p>Total Officials</p>
                    </div>

                </div>

        </div>

    );
}