import { useEffect, useState } from "react";
import api from "../services/api"; // Change the path if yours is different
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import {
    FiEdit,
    FiTrash2,
    FiEye,
    FiPlus,
    FiSave,
    FiX,
    FiInfo 
} from "react-icons/fi";
export default function Reports() {

    const [selectedReport, setSelectedReport] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [showAddModal, setShowAddModal] = useState(false);

    const [problemCategories, setProblemCategories] = useState([]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [barangays, setBarangays] = useState([]);
    const [newReport, setNewReport] = useState({
        title: "",
        barangay_id: "",
        problem_category_id: "",
        severity: "Medium",
        description: "",
        latitude: "",
        longitude: "",
    });
    const handleSaveReport = async () => {

        try {

            await api.post("/reports", newReport);

            fetchReports(); // <-- Reload the reports

            alert("Report created successfully!");

            setShowAddModal(false);

        } catch (error) {

            console.log(error.response?.data);

            alert("Unable to save report.");

        }

    };

    const [reports, setReports] = useState([]);

    const fetchReports = () => {

        api.get("/reports")
            .then((response) => {
                setReports(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    useEffect(() => {

        fetchReports();

        api.get("/reports")
            .then((response) => {
                setReports(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reports:", error);
            });
         api.get("/problem-categories")
            .then((response) => {
                setProblemCategories(response.data);
            });

        api.get("/barangays")
            .then((response)=>{
                setBarangays(response.data);
            });

    }, []);

    function LocationMarker({ markerPosition, setMarkerPosition, newReport, setNewReport }) {

        useMapEvents({
            click(e) {

                setMarkerPosition(e.latlng);

                setNewReport({
                    ...newReport,
                    latitude: e.latlng.lat,
                    longitude: e.latlng.lng
                });

            }
        });

        return markerPosition ? (
            <Marker position={markerPosition} />
        ) : null;
    }


    return (
        <div className="reports-container">

            <div className="reports-header">

                <h1>Reports</h1>

            <button
                className="add-btn"
                onClick={() => setShowAddModal(true)}
            >
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
                                        <FiInfo />
                                    </button>

                                    <button className="view-btn" style={{backgroundColor:"cyan"}}>
                                        <FiEdit />
                                    </button>
                                    <button className="view-btn" style={{backgroundColor:"red"}}>
                                        <FiTrash2 />
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

            {showAddModal && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>New Report</h2>

                            <button
                                className="close-btn"
                                onClick={() => setShowAddModal(false)}
                            >
                                ✕
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="form-group">
                                <label>Title</label>

                                <input
                                    type="text"
                                    value={newReport.title}
                                    onChange={(e) =>
                                        setNewReport({
                                            ...newReport,
                                            title: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Barangay</label>

                                <select
                                    value={newReport.barangay_id}
                                    onChange={(e)=>
                                        setNewReport({
                                            ...newReport,
                                            barangay_id:e.target.value
                                        })
                                    }
                                >
                                    <option value="">Select Barangay</option>

                                    {barangays.map((barangay)=>(
                                        <option
                                            key={barangay.id}
                                            value={barangay.id}
                                        >
                                            {barangay.name}
                                        </option>
                                    ))}

                                </select>
                            </div>

                            <div className="form-group">
                                <label>Problem Category</label>
                                <select
                                    value={newReport.problem_category_id}
                                    onChange={(e) =>
                                        setNewReport({
                                            ...newReport,
                                            problem_category_id: e.target.value
                                        })
                                    }
                                >

                                    <option value="">
                                        Select Category
                                    </option>

                                    {problemCategories.map((category) => (

                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>

                                    ))}

                                </select>
                            </div>

                            <div className="form-group">
                                <label>Severity</label>

                                <select
                                    value={newReport.severity}
                                    onChange={(e) =>
                                        setNewReport({
                                            ...newReport,
                                            severity: e.target.value
                                        })
                                    }
                                >
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                    <option>Critical</option>
                                </select>

                            </div>

                            <div className="form-group">

                                <label>Description</label>

                                <textarea
                                    rows="4"
                                    value={newReport.description}
                                    onChange={(e) =>
                                        setNewReport({
                                            ...newReport,
                                            description: e.target.value
                                        })
                                    }
                                />

                            </div>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Select Incident Location</label>

                                    <MapContainer
                                        center={[7.0731, 125.6128]}
                                        zoom={13}
                                        className="report-map"
                                    >

                                        <TileLayer
                                            attribution="&copy; OpenStreetMap contributors"
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        <LocationMarker
                                            markerPosition={markerPosition}
                                            setMarkerPosition={setMarkerPosition}
                                            newReport={newReport}
                                            setNewReport={setNewReport}
                                        />

                                    </MapContainer>

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Latitude</label>

                                    <input
                                        value={newReport.latitude}
                                        readOnly
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Longitude</label>

                                    <input
                                        value={newReport.longitude}
                                        readOnly
                                    />

                                </div>

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowAddModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={handleSaveReport}
                                >
                                    Save Report
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </div>
        


    );
}