import {
    FiMap,
    FiAlertTriangle,
    FiUsers,
    FiCheckCircle,
    FiBarChart2,
    FiBell,
} from "react-icons/fi";

import "./landing.css";

export default function Features() {
    return (
        <section
            id="features"
            className="features"
        >

            <div className="features-header">

                <span className="section-tag">
                    FEATURES
                </span>

                <h2>
                    Everything Needed to Manage
                    Community Reports Efficiently
                </h2>

                <p>
                    Designed to help citizens, administrators,
                    and barangay officials work together through
                    one centralized reporting platform.
                </p>

            </div>

            <div className="features-grid">

                <div className="feature-card">

                    <FiAlertTriangle className="feature-icon" />

                    <h3>Incident Reporting</h3>

                    <p>
                        Citizens can submit reports for flooding,
                        road damage, garbage, fires, power outages,
                        and other community concerns.
                    </p>

                </div>

                <div className="feature-card">

                    <FiMap className="feature-icon" />

                    <h3>Interactive Heatmap</h3>

                    <p>
                        Reports are displayed on an interactive
                        map to visualize affected locations and
                        identify problem hotspots.
                    </p>

                </div>

                <div className="feature-card">

                    <FiCheckCircle className="feature-icon" />

                    <h3>Report Verification</h3>

                    <p>
                        Every report is reviewed by an
                        administrator before being assigned
                        to the appropriate barangay official.
                    </p>

                </div>

                <div className="feature-card">

                    <FiUsers className="feature-icon" />

                    <h3>Assignment Management</h3>

                    <p>
                        Verified reports are automatically
                        assigned based on the selected
                        barangay for faster response.
                    </p>

                </div>

                <div className="feature-card">

                    <FiBarChart2 className="feature-icon" />

                    <h3>Analytics Dashboard</h3>

                    <p>
                        Monitor report statistics,
                        severity levels,
                        and resolution progress through
                        visual charts.
                    </p>

                </div>

                <div className="feature-card">

                    <FiBell className="feature-icon" />

                    <h3>Status Tracking</h3>

                    <p>
                        Citizens can monitor their reports
                        from submission until resolution,
                        improving transparency.
                    </p>

                </div>

            </div>

        </section>
    );
}