import "./landing.css";

export default function Screenshots() {

    const screenshots = [

        {
            title: "Dashboard",
            image: "/images/dashboard.png",
        },

        {
            title: "Incident Heatmap",
            image: "/images/heatmap.png",
        },

        {
            title: "Reports",
            image: "/images/reports.png",
        },

        {
            title: "Assignments",
            image: "/images/assignments.png",
        },

        {
            title: "Analytics",
            image: "/images/analytics.png",
        },

        {
            title: "User Management",
            image: "/images/users.png",
        },

    ];

    return (

        <section
            id="screenshots"
            className="screenshots"
        >

            <div className="screenshots-header">

                <span className="section-tag">
                    SYSTEM PREVIEW
                </span>

                <h2>
                    Explore the Barangay Heatmap System
                </h2>

                <p>
                    A quick look at the different modules
                    designed to simplify incident reporting,
                    monitoring, and management.
                </p>

            </div>

            <div className="gallery">

                {screenshots.map((screen, index) => (

                    <div
                        key={index}
                        className="screen-card"
                    >

                        <img
                            src={screen.image}
                            alt={screen.title}
                        />

                        <div className="screen-info">

                            <h3>{screen.title}</h3>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}