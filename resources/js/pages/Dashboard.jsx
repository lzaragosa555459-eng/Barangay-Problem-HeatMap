import { useEffect, useState } from "react";
import api from "../services/api";
import {
    HiOutlineDocumentText,
    HiOutlineClock,
    HiOutlineCheckBadge,
    HiOutlineExclamationTriangle,
    HiOutlineUsers,
    HiOutlineShieldCheck
} from "react-icons/hi2";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

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
            <div className="reports-header">
                <h1>Dashboard</h1>
            </div>


                <div className="cards">

                    <div className="card" className="setting-card">

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineDocumentText size={40}/>
                            <h2>{stats.totalReports}</h2>
                        </div>

                        <p>Total Reports</p>

                    </div>

                    <div className="card" className="setting-card">

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineClock size={40}/>
                            <h2>{stats.pendingReports}</h2>
                        </div>

                        <p>Open Cases</p>

                    </div>

                    <div className="card"  className="setting-card">

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineCheckBadge size={40}/>
                            <h2>{stats.resolvedReports}</h2>
                        </div>

                        <pS>Resolved Cases</pS>

                    </div>

                    <div className="card" className="setting-card">

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineExclamationTriangle size={40}/>
                            <h2>{stats.criticalReports}</h2>
                        </div>

                        <p>High Risk Areas</p>

                    </div>

                </div>

                <div className="cards">

                    <div className="card" className="setting-card">

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineUsers size={50}/>
                            <h2 style={{  fontSize: "50px" }}>{stats.totalCitizens}</h2>
                        </div>

                        <p style={{  fontSize: "25px" }}>Total Citizens</p>

                    </div>

                    <div className="card"  className="setting-card">

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineShieldCheck size={50}/>
                            <h2 style={{  fontSize: "50px" }}>{stats.totalOfficials}</h2>
                        </div>

                        <p style={{ fontSize: "25px" }}>Total Officials</p>

                    </div>
                </div>

                <div
                    className="card"
                    style={{
                        marginTop: "25px",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                    className="setting-card"
                >

                    <h2 style={{ marginBottom: "20px" }}>
                        Top 10 Barangays with Most Reports
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <BarChart
                            data={stats.topBarangays}
                        >

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="name"
                            />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="total"
                                fill="#d4511d"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

        </div>

    );
}