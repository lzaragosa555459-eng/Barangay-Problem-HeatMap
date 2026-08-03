import {
    FiEdit3,
    FiCheckCircle,
    FiClipboard,
    FiTool,
    FiFlag,
} from "react-icons/fi";

import "./landing.css";

export default function Workflow() {
    return (
        <section
            id="workflow"
            className="workflow"
        >

            <div className="workflow-header">

                <span className="section-tag">
                    WORKFLOW
                </span>

                <h2>
                    From Report Submission
                    to Resolution
                </h2>

                <p>
                    Every reported incident follows a structured
                    workflow to ensure transparency, accountability,
                    and timely resolution.
                </p>

            </div>

            <div className="workflow-container">

                <div className="workflow-step">

                    <div className="step-icon">
                        <FiEdit3 />
                    </div>

                    <h3>1. Submit Report</h3>

                    <p>
                        Citizens submit reports by providing
                        the incident location, category,
                        severity, and description.
                    </p>

                </div>

                <div className="workflow-arrow">
                    →
                </div>

                <div className="workflow-step">

                    <div className="step-icon">
                        <FiCheckCircle />
                    </div>

                    <h3>2. Verification</h3>

                    <p>
                        The Administrator reviews
                        and verifies each submitted report
                        before processing.
                    </p>

                </div>

                <div className="workflow-arrow">
                    →
                </div>

                <div className="workflow-step">

                    <div className="step-icon">
                        <FiClipboard />
                    </div>

                    <h3>3. Assignment</h3>

                    <p>
                        Verified reports are automatically
                        assigned to the responsible
                        Barangay Official.
                    </p>

                </div>

                <div className="workflow-arrow">
                    →
                </div>

                <div className="workflow-step">

                    <div className="step-icon">
                        <FiTool />
                    </div>

                    <h3>4. Action</h3>

                    <p>
                        Barangay Officials investigate,
                        update the report status,
                        and resolve the incident.
                    </p>

                </div>

                <div className="workflow-arrow">
                    →
                </div>

                <div className="workflow-step">

                    <div className="step-icon">
                        <FiFlag />
                    </div>

                    <h3>5. Resolved</h3>

                    <p>
                        The report is marked as resolved
                        and becomes part of the community
                        records and analytics.
                    </p>

                </div>

            </div>

        </section>
    );
}