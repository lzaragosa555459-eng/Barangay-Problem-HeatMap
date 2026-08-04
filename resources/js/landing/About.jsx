import {
    FiMapPin,
    FiUsers,
    FiCheckCircle,
} from "react-icons/fi";

import "./landing.css";

export default function About() {

    return (

        <section
            id="about"
            className="about"
        >

            <div className="about-header">

                <span className="section-tag">
                    ABOUT THE SYSTEM
                </span>

                <h2>
                    Making Community Problem Reporting
                    Faster and More Transparent
                </h2>

                <p>
                    The Barangay Heatmap Problem Reporting System is a
                    web-based platform that enables citizens to report
                    community issues while allowing administrators and
                    barangay officials to efficiently verify, assign,
                    and resolve reported incidents.
                </p>

            </div>

            <div className="about-cards">

                <div className="about-card">

                    <FiUsers className="about-icon" />

                    <h3>Community Participation</h3>

                    <p>
                        Citizens can submit reports about flooding,
                        damaged roads, garbage collection, fire
                        incidents, and other community concerns.
                    </p>

                </div>

                <div className="about-card">

                    <FiMapPin className="about-icon" />

                    <h3>Interactive Heatmap</h3>

                    <p>
                        Every submitted report is displayed on a map,
                        helping administrators visualize affected
                        areas and prioritize response efforts.
                    </p>

                </div>

                <div className="about-card">

                    <FiCheckCircle className="about-icon" />

                    <h3>Efficient Workflow</h3>

                    <p>
                        Reports are verified by the administrator,
                        automatically assigned to the appropriate
                        Barangay Official, and monitored until they
                        are resolved.
                    </p>

                </div>

            </div>

        </section>

    );

}