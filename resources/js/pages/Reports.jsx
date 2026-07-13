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

    const [search, setSearch] = useState("");
    const [selectedBarangay, setSelectedBarangay] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

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

            const token = localStorage.getItem("token");

            await api.post(
                "/reports",
                newReport,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchReports(); // <-- Reload the reports

            alert("Report created successfully!");

            setShowAddModal(false);

        } catch (error) {

            console.log(error.response?.data);

            alert("Unable to save report.");

        }

    };

    const [reports, setReports] = useState([]);
    {/*pagination*/}
    const [pagination, setPagination] = useState({});

    const fetchReports = (page = 1) => {

        api.get(`/reports?page=${page}`)
            .then((response) => {

                setReports(response.data.data);
                setPagination(response.data);

            })
            .catch((error) => {

                console.error(error);

            });

    };

    useEffect(() => {

        fetchReports();

        api.get("/problem-categories")
            .then((response) => {
                setProblemCategories(response.data);
            });

        api.get("/barangays")
            .then((response) => {
                setBarangays(response.data);
            });

    }, []);

    function LocationMarker({
        markerPosition,
        setMarkerPosition,
        report,
        setReport
    }) {

        useMapEvents({

            click(e) {

                setMarkerPosition(e.latlng);

                setReport({
                    ...report,
                    latitude: e.latlng.lat,
                    longitude: e.latlng.lng
                });

            }

        });

        return markerPosition
            ? <Marker position={markerPosition} />
            : null;
    }
    const [showEditModal, setShowEditModal] = useState(false);

    const [editReport, setEditReport] = useState({
        id: "",
        title: "",
        barangay_id: "",
        problem_category_id: "",
        severity: "",
        description: "",
        latitude: "",
        longitude: "",
    });

    const handleDeleteReport = async (id) => {

        if (!window.confirm("Delete this report?"))
            return;

        try {

            await api.delete(`/reports/${id}`);

            fetchReports();

            alert("Report deleted!");

        } catch (error) {

            console.log(error.response?.data);

        }

    };

    const handleUpdateReport = async () => {

        try {

            await api.put(
                `/reports/${editReport.id}`,
                editReport
            );

            fetchReports();

            setShowEditModal(false);

            alert("Report updated!");

        } catch (error) {

            console.log(error.response?.data);

        }

    };

    
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={selectedBarangay}
                    onChange={(e) => setSelectedBarangay(e.target.value)}
                >

                    <option value="">All Barangays</option>

                    {barangays.map((barangay) => (

                        <option
                            key={barangay.id}
                            value={barangay.id}
                        >
                            {barangay.name}
                        </option>

                    ))}

                </select>

                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                >

                    <option value="">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Verified">Verified</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Rejected">Rejected</option>

                </select>

            </div>

            <table className="reports-table">

                <thead>

                    <tr>
                        <th>Reported by</th>
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

                        reports
                        .filter((report) => {

                            const matchSearch =
                                report.title.toLowerCase()
                                .includes(search.toLowerCase());

                            const matchBarangay =
                                selectedBarangay === "" ||
                                report.barangay_id == selectedBarangay;

                            const matchStatus =
                                selectedStatus === "" ||
                                report.status === selectedStatus;

                            return matchSearch &&
                                matchBarangay &&
                                matchStatus;

                        })
                        .map((report) => (

                            <tr key={report.id}>
                                <td>{report.user?.name}</td>
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

                                    <button
                                        className="view-btn"
                                        style={{ backgroundColor: "#06b6d4" }}
                                        onClick={() => {

                                            setEditReport({
                                                id: report.id,
                                                title: report.title,
                                                barangay_id: report.barangay_id,
                                                problem_category_id: report.problem_category_id,
                                                severity: report.severity,
                                                description: report.description,
                                                latitude: report.latitude,
                                                longitude: report.longitude,
                                            });

                                            setMarkerPosition({
                                                lat: Number(report.latitude),
                                                lng: Number(report.longitude),
                                            });

                                            setShowEditModal(true);

                                        }}
                                    >
                                        <FiEdit />
                                    </button>
                                    <button
                                        className="view-btn"
                                        style={{ backgroundColor: "#ef4444" }}
                                        onClick={() => handleDeleteReport(report.id)}
                                    >
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

            <div className="pagination">

                <button
                    disabled={!pagination.prev_page_url}
                    onClick={() => fetchReports(pagination.current_page - 1)}
                >
                    Previous
                </button>

                <span>
                    Page {pagination.current_page} of {pagination.last_page}
                </span>

                <button
                    disabled={!pagination.next_page_url}
                    onClick={() => fetchReports(pagination.current_page + 1)}
                >
                    Next
                </button>

            </div>

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
                                            report={newReport}
                                            setReport={setNewReport}
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


            {/* Update modal */}
            {showEditModal && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>New Report</h2>

                            <button
                                className="close-btn"
                                onClick={() => setShowEditModal(false)}
                            >
                                ✕
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="form-group">
                                <label>Title</label>

                                <input
                                    type="text"
                                    value={editReport.title}
                                    onChange={(e) =>
                                        setEditReport({
                                            ...editReport,
                                            title: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Barangay</label>

                                <select
                                    value={editReport.barangay_id}
                                    onChange={(e)=>
                                        setEditReport({
                                            ...editReport,
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
                                    value={editReport.problem_category_id}
                                    onChange={(e) =>
                                        setEditReport({
                                            ...editReport,
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
                                    value={editReport.severity}
                                    onChange={(e) =>
                                        setEditReport({
                                            ...editReport,
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
                                    value={editReport.description}
                                    onChange={(e) =>
                                        setEditReport({
                                            ...editReport,
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
                                            report={editReport}
                                            setReport={setEditReport}
                                        />

                                    </MapContainer>

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Latitude</label>

                                    <input
                                        value={editReport.latitude}
                                        readOnly
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Longitude</label>

                                    <input
                                        value={editReport.longitude}
                                        readOnly
                                    />

                                </div>

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowEditModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={handleUpdateReport}
                                >
                                    Update Report
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </div>
        


    );
}