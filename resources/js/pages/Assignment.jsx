import { useEffect, useState } from "react";
import {
    FiCheck,
    FiX,
    FiCheckCircle,
    FiEye,
} from "react-icons/fi";
import api from "../services/api";

export default function Assignments() {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignments();
        fetchUser();
    }, []);

    const fetchAssignments = async () => {

        try {

            const response = await api.get("/assignments");

            setAssignments(response.data);
            console.log(response.data);
            

        } catch (error) {

            console.error(error);
            console.log(error.response.data);
            console.log(response.data);
        
        }

    };

    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [showView, setShowView] = useState(false);
    const viewAssignment = (assignment) => {

        console.log(assignment);
        setSelectedAssignment(assignment);
        setShowView(true);
    };

    const declineAssignment = async () => {

        try {

            await api.put(
                `/assignments/${selectedAssignment.id}/decline`
            );

            alert("Assignment declined.");

            setShowView(false);

            fetchAssignments();

        } catch (error) {

            console.error(error);

        }

    };

    const completeAssignment = async () => {

        try {

            await api.put(
                `/assignments/${selectedAssignment.id}/complete`
            );

            alert("Assignment completed.");

            setShowView(false);

            fetchAssignments();

        } catch (error) {

            console.error(error);

        }

    };
        const acceptAssignment = async () => {

        try {

            await api.put(
                `/assignments/${selectedAssignment.id}/accept`
            );

            alert("Assignment accepted.");

            setShowView(false);

            fetchAssignments();

        } catch (error) {

            console.error(error);

        }

    };

    const [user, setUser] = useState({});

    const fetchUser = async () => {

        const response = await api.get("/user");
        
        setUser(response.data);

    };

    return (

        <div className="reports-container">

            <div className="reports-header">

                <h1>Assignments</h1>

                <p>
                    Manage report assignments and monitor their progress.
                </p>

            </div>

            <div className="table-container">

                <table className="reports-table">

                    <thead>

                        <tr>

                            <th>Report</th>
                            {user.role !== "Barangay Official" && (
                                <th>Barangay</th>
                            )}
                            <th>Assigned To</th>
                            <th>Assigned By</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {assignments.length > 0 ? (

                            assignments.map((assignment) => (

                                <tr key={assignment.id}>

                                    <td>{assignment.report.title}</td>

                                    {user.role === "Barangay Official" ? null : (
                                        <td>{assignment.report.barangay.name}</td>
                                    )}

                                    <td>
                                        {assignment.assigned_to?.name}
                                    </td>

                                    <td>
                                        {assignment.assigned_by?.name}
                                    </td>

                                    <td>
                                        {assignment.deadline}
                                    </td>

                                    <td>

                                        <span
                                            className={`status-badge ${assignment.status
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        >
                                            {assignment.status}
                                        </span>

                                    </td>

                                    <td>
                                        {new Date(assignment.created_at).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                        })}
                                    </td>

                                    <td>

                                        <button
                                            className="view-btn"
                                            onClick={() => viewAssignment(assignment)}
                                        >
                                            <FiEye />
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="7">

                                    No assignments found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>
            {showView && selectedAssignment && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>Assignment Details</h2>

                            <button
                                className="close-btn"
                                onClick={() => setShowView(false)}
                            >
                                ×
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="profile-row">
                                <strong>Report</strong>
                                <span>{selectedAssignment.report.title}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Reported by</strong>
                                <span>{selectedAssignment.report.user?.name ?? 'unknown'}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Description</strong>
                                <span>{selectedAssignment.report.description}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Barangay</strong>
                                <span>{selectedAssignment.report.barangay.name}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Category</strong>
                                <span>{selectedAssignment.report.problem_category.name}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Severity</strong>
                                <span>{selectedAssignment.report.severity}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Deadline</strong>
                                <span>{selectedAssignment.deadline}</span>
                            </div>

                            <div className="profile-row">
                                <strong>Status</strong>
                                <span>{selectedAssignment.status}</span>
                            </div>

                        </div>

                        <div className="modal-footer">

                            <button
                                className="cancel-btn"
                                onClick={() => setShowView(false)}
                            >
                                Close
                            </button>

                            {selectedAssignment.status === "Pending" && (

                                <>
                                    <button
                                        className="save-btn"
                                        onClick={acceptAssignment}
                                    >
                                        <FiCheck style={{ marginRight: "6px" }} />
                                        Accept
                                    </button>

                                    <button
                                        className="cancel-btn"
                                        onClick={declineAssignment}
                                    >
                                        <FiX style={{ marginRight: "6px" }} />
                                        Decline
                                    </button>
                                </>

                            )}

                            {selectedAssignment.status === "Accepted" && (

                                <button
                                    className="save-btn"
                                    onClick={completeAssignment}
                                >
                                    <FiCheckCircle style={{ marginRight: "6px" }} />
                                    Complete
                                </button>

                            )}

                        </div>

                    </div>

                </div>

            )}
        </div>

    );

}