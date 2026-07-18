import { useEffect, useState } from "react";
import api from "../services/api";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    Legend as RechartsLegend,
} from "recharts";

export default function Analytics() {

    const [analytics, setAnalytics] = useState({
        monthlyReport: [],
        reportsByBarangay: [],
        reportsByCategory: [],
        severity: [],
        total: 0,
        resolved: 0,
        pending: 0,
        average: {},
        heatmap: []
    });

    useEffect(() => {

        api.get("/analytics")
            .then((response) => {

                setAnalytics(response.data);

            })
            .catch((error) => {

                console.error(error);

            });

    }, []);
    const monthlyReportData = {
        labels: analytics.monthlyReport.map(item => item.month),

        datasets: [
            {
                label: "Monthly Reports",
                data: analytics.monthlyReport.map(item => item.total),

                borderColor: "#16a34a",
                backgroundColor: "rgba(22,163,74,0.2)",

                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 8,
            },
        ],
    };
    const monthlyReportOptions = {

        responsive: true,

        plugins: {

            legend: {
                display: true,
                position: "top",
            },

            title: {
                display: true,
                text: "Monthly Community Reports",
            },

        },

    };


    const barangayChartData = analytics.reportsByBarangay.map(item => ({
        name: item.barangay?.name ?? "Unknown",
        total: item.total,
    }));

    const categoryChartData = analytics.reportsByCategory.map(item => ({
        name: item.problem_category?.name ?? "Unknown",
        total: item.total,
    }));

    const severityChartData = analytics.severity.map(item => ({
        name: item.severity,
        value: item.total,
    }));
    const COLORS = [
        "#22c55e", // Low
        "#facc15", // Medium
        "#f97316", // High
        "#ef4444", // Critical
    ];
    return (
        <div className="reports-container">

            <div className="reports-header">
                <h1>Analytics Dashboard</h1>
            </div>

            {/* Summary Cards */}

            <div className="cards">

                <div className="card">
                    <h3>Total Reports</h3>
                    <h2>{analytics.total}</h2>
                </div>

                <div className="card">
                    <h3>Resolved</h3>
                    <h2>{analytics.resolved}</h2>
                </div>

                <div className="card">
                    <h3>Pending</h3>
                    <h2>{analytics.pending}</h2>
                </div>

                <div className="card">
                    <h3>Average Response Time</h3>
                    <h2>
                        {analytics.average?.avg_hours
                            ? `${Number(analytics.average.avg_hours).toFixed(2)} hrs`
                            : "N/A"}
                    </h2>
                </div>

            </div>
            <br />
            <hr />
            <br />

            <h2 className="reports-header">Monthly Reports</h2>

            <div className="chart-card">

                <Line
                    data={monthlyReportData}
                    options={monthlyReportOptions}
                />

            </div>

            <br />

            <h2 className="reports-header">Reports by Barangay</h2>

            <div
                style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    marginBottom: "30px",
                }}
            >
                <ResponsiveContainer
                    width="100%"
                    height={350}
                >
                    <BarChart data={barangayChartData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="name"
                        />

                        <YAxis />

                        <RechartsTooltip />

                        <Bar
                            dataKey="total"
                            fill="#d4511d"
                        />

                    </BarChart>

                </ResponsiveContainer>
            </div>

            <br />

            <h2 className="reports-header">Reports by Category</h2>

            <div
                style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    marginBottom: "30px",
                }}
            >
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart
                        data={categoryChartData}
                        layout="vertical"
                        margin={{
                            top: 20,
                            right: 30,
                            
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            type="number"
                        />

                        <YAxis
                            type="category"
                            dataKey="name"
                            width={140}
                        />

                        <RechartsTooltip />

                        <Bar
                            dataKey="total"
                            fill="#2563eb"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <br />

            <h2 className="reports-header">Severity Distribution</h2>

            <div
                style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    marginBottom: "30px",
                }}
            >
                <ResponsiveContainer
                    width="100%"
                    height={500}
                >
                    <PieChart>

                        <Pie
                            data={severityChartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            dataKey="value"
                            nameKey="name"
                            label
                        >
                            {severityChartData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <RechartsTooltip />

                        <RechartsLegend />

                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}