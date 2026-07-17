import { useEffect, useState } from "react";
import api from "../services/api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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
    const barangayReportData = {

        labels: analytics.reportsByBarangay.map(
            item => item.barangay?.name
        ),

        datasets: [
            {
                label: "Reports",

                data: analytics.reportsByBarangay.map(
                    item => item.total
                ),

                backgroundColor: "#16a34a",
                borderColor: "#14532D",
                borderWidth: 1,
                borderRadius: 8,
            },
        ],
    };
    const barangayReportOptions = {

        responsive: true,

        plugins: {

            legend: {
                display: false,
            },

            title: {
                display: true,
                text: "Reports by Barangay",
            },

        },

        scales: {

            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0,
                },
            },

        },

    };



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


            <div className="card" style={{marginTop: "50px"}}>
            <h2>Report by Barangaay</h2>
                <Bar
                    data={barangayReportData}
                    options={barangayReportOptions}
                />

            </div>

            <br />

            <h2 className="reports-header">Reports by Barangay</h2>

            <table className="reports-table">

                <thead>
                    <tr>
                        <th>Barangay</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>

                    {analytics.reportsByBarangay.map((item) => (

                        <tr key={item.barangay_id}>
                            <td>{item.barangay?.name}</td>
                            <td>{item.total}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

            <br />

            <h2 className="reports-header">Reports by Category</h2>

            <table className="reports-table">

                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>

                    {analytics.reportsByCategory.map((item) => (

                        <tr key={item.problem_category_id}>
                            <td>{item.problem_category?.name}</td>
                            <td>{item.total}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

            <br />

            <h2 className="reports-header">Severity Distribution</h2>

            <table className="reports-table">

                <thead>
                    <tr>
                        <th>Severity</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>

                    {analytics.severity.map((item) => (

                        <tr key={item.severity}>
                            <td>{item.severity}</td>
                            <td>{item.total}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}