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
    }, []);

    const fetchAssignments = async () => {

        try {

            const response = await api.get("/assignments");

            setAssignments(response.data);

        } catch (error) {

            console.error(error);
            console.log(error.response.data);
        }

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

                                    <td>
                                        {assignment.assigned_to.name}
                                    </td>

                                    <td>
                                        {assignment.assigned_by.name}
                                    </td>

                                    <td>
                                        {assignment.deadline}
                                    </td>

                                    <td>

                                        <span className={`status-badge ${assignment.status.toLowerCase()}`}>

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
                                            //onClick={() => viewAssignment(assignment)}
                                        >
                                            <FiEye />
                                        </button>

                                        <button
                                            className="save-btn"
                                            //onClick={acceptAssignment}
                                        >
                                            <FiCheck style={{ marginRight: "6px" }} />
                                            Accept
                                        </button>

                                        <button
                                            className="cancel-btn"
                                            //onClick={declineAssignment}
                                        >
                                            <FiX style={{ marginRight: "6px" }} />
                                            Decline
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

        </div>

    );

}