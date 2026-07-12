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

            <h1>Dashboard</h1>

                <div className="cards">

                    <div className="card" style={{ backgroundColor: "#3b82f6" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineDocumentText size={40} color="white" />
                            <h2 style={{ color: "white" }}>{stats.totalReports}</h2>
                        </div>

                        <p style={{ color: "#dbeafe" }}>Total Reports</p>

                    </div>

                    <div className="card" style={{ backgroundColor: "#f59e0b" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineClock size={40} color="white" />
                            <h2 style={{ color: "white" }}>{stats.pendingReports}</h2>
                        </div>

                        <p style={{ color: "#fef3c7" }}>Open Cases</p>

                    </div>

                    <div className="card" style={{ backgroundColor: "#10b981" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineCheckBadge size={40} color="white" />
                            <h2 style={{ color: "white" }}>{stats.resolvedReports}</h2>
                        </div>

                        <p style={{ color: "#d1fae5" }}>Resolved Cases</p>

                    </div>

                    <div className="card" style={{ backgroundColor: "#ef4444" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineExclamationTriangle size={40} color="white" />
                            <h2 style={{ color: "white" }}>{stats.criticalReports}</h2>
                        </div>

                        <p style={{ color: "#fee2e2" }}>High Risk Areas</p>

                    </div>

                </div>

                <div className="cards">

                    <div className="card" style={{ backgroundColor: "#8b5cf6" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineUsers size={50} color="white" />
                            <h2 style={{ color: "white", fontSize: "50px" }}>{stats.totalCitizens}</h2>
                        </div>

                        <p style={{ color: "#ede9fe", fontSize: "25px" }}>Total Citizens</p>

                    </div>

                    <div className="card" style={{ backgroundColor: "#06b6d4" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <HiOutlineShieldCheck size={50} color="white" />
                            <h2 style={{ color: "white", fontSize: "50px" }}>{stats.totalOfficials}</h2>
                        </div>

                        <p style={{ color: "#cffafe", fontSize: "25px" }}>Total Officials</p>

                    </div>
                </div>

                <div
                    className="card"
                    style={{
                        marginTop: "25px",
                        padding: "20px",
                        background: "#fff",
                        borderRadius: "12px",
                    }}
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
                                fill="#3b82f6"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

        </div>

    );
}