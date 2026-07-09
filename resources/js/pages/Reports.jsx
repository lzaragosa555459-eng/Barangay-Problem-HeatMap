
export default function Reports() {
    return (
        <div className="reports-container">

            <div className="reports-header">

                <h1>Reports</h1>

                <button className="add-btn">
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

                        <th>ID</th>
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

                    <tr>

                        <td>1</td>
                        <td>Flood near highway</td>
                        <td>Mintal</td>
                        <td>Flood</td>
                        <td>
                            <span className="status pending">
                                Pending
                            </span>
                        </td>
                        <td>High</td>
                        <td>Jul 9, 2026</td>

                        <td>

                            <button className="view-btn">
                                View
                            </button>

                        </td>

                    </tr>

                    <tr>

                        <td>2</td>
                        <td>Garbage Collection</td>
                        <td>Talomo</td>
                        <td>Garbage</td>

                        <td>
                            <span className="status resolved">
                                Resolved
                            </span>
                        </td>

                        <td>Medium</td>
                        <td>Jul 8, 2026</td>

                        <td>

                            <button className="view-btn">
                                View
                            </button>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>
    );
}