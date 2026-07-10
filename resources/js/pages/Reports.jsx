import { useEffect, useState } from "react";
import api from "../services/api"; // Change the path if yours is different


export default function Reports() {

    const [selectedReport, setSelectedReport] = useState(null);
    const [showModal, setShowModal] = useState(false);

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

                                <td>{report.title}</td>
                                <td>{report.barangay?.name}</td>
                                <td>{report.problem_category?.name}</td>

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
                                <td>
                                    {new Date(report.reported_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </td>

                                <td>
                                    <button
                                        className="view-btn"
                                        onClick={() => {
                                            setSelectedReport(report);
                                            setShowModal(true);
                                        }}
                                    >
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

            {showModal && selectedReport && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>Report Details</h2>

                            <button
                                className="close-btn"
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>

                        </div>

                        <div className="modal-body">

                            <p><strong>Title:</strong> {selectedReport.title}</p>

                            <p><strong>Barangay:</strong> {selectedReport.barangay?.name}</p>

                            <p><strong>Category:</strong> {selectedReport.problem_category?.name}</p>

                            <p><strong>Severity:</strong> {selectedReport.severity}</p>

                            <p><strong>Status:</strong> {selectedReport.status}</p>

                            <p><strong>Latitude:</strong> {selectedReport.latitude}</p>

                            <p><strong>Longitude:</strong> {selectedReport.longitude}</p>

                            <p><strong>Reported:</strong> {
                                new Date(selectedReport.reported_at).toLocaleDateString("en-US",{
                                    year:"numeric",
                                    month:"long",
                                    day:"numeric"
                                })
                            }</p>

                            <p>
                                <strong>Description:</strong><br />
                                {selectedReport.description}
                            </p>

                        </div>

                    </div>

                </div>

            )}
        </div>
        


    );
}