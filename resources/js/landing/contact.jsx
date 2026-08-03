import {
    FiMapPin,
    FiMail,
    FiPhone,
    FiClock,
} from "react-icons/fi";

import "./landing.css";

export default function Contact() {

    return (

        <section
            id="contact"
            className="contact"
        >

            <div className="contact-header">

                <span className="section-tag">
                    CONTACT US
                </span>

                <h2>
                    We'd Love to Hear From You
                </h2>

                <p>
                    Have questions, suggestions, or need assistance?
                    Reach out to us and we'll be happy to help.
                </p>

            </div>

            <div className="contact-container">

                {/* Left Side */}

                <div className="contact-info">

                    <div className="info-card">

                        <FiMapPin className="contact-icon" />

                        <div>

                            <h3>Address</h3>

                            <p>
                                Davao City, Philippines
                            </p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FiMail className="contact-icon" />

                        <div>

                            <h3>Email</h3>

                            <p>
                                barangayheatmap@gmail.com
                            </p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FiPhone className="contact-icon" />

                        <div>

                            <h3>Phone</h3>

                            <p>
                                +63 912 345 6789
                            </p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FiClock className="contact-icon" />

                        <div>

                            <h3>Office Hours</h3>

                            <p>
                                Monday - Friday
                                <br />
                                8:00 AM - 5:00 PM
                            </p>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        rows="6"
                        placeholder="Write your message..."
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </section>

    );

}