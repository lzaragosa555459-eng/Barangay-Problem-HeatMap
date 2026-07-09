import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="sidebar">
            <h2>BCPM</h2>

            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link to="/heatmap">Heatmap</Link>
                </li>

                <li>
                    <Link to="/reports">Reports</Link>
                </li>
            </ul>
        </div>
    );
}