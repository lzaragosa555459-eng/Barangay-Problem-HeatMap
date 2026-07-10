import { useEffect, useState } from "react";
import api from "../services/api"; // Change the path if yours is different

export default function Reports() {

    const [reports, setReports] = useState([]);

    useEffect(() => {

        api.get("/reports")
            .then((response) => {
                setReports(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reports:", error);
            });

    }, []);

    return (
        <div className="reports-container">

            <div className="reports-header">

                <h1>Reports</h1>

                <button className="add-btn">
                    + New Report
                </button>

            </div>

            <div className="filters">

                <input
                    type="text"
                    placeholder="🔍 Search reports..."
                />

                <select>
                    <option>All Barangays</option>
                    <option>Mintal</option>
                    <option>Talomo</option>
                    <option>Buhangin</option>
                </select>

                <select>
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Resolved</option>
                </select>

            </div>

            <table className="reports-table">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Barangay</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Severity</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {reports.length > 0 ? (

                        reports.map((report) => (

                            <tr key={report.id}>

                                <td>{report.id}</td>
                                <td>{report.title}</td>
                                <td>{report.barangay}</td>
                                <td>{report.category}</td>

                                <td>
                                    <span
                                        className={`status ${report.status
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                    >
                                        {report.status}
                                    </span>
                                </td>

                                <td>{report.severity}</td>
                                <td>{report.date}</td>

                                <td>
                                    <button className="view-btn">
                                        View
                                    </button>
                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td colSpan="8" style={{ textAlign: "center" }}>
                                No reports found.
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}