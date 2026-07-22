import { useEffect, useState } from "react";
import api from "../services/api";
import {
    FiEdit,
    FiTrash2,
    FiEye,
    FiPlus,
    FiSave,
    FiX,
    FiInfo 
} from "react-icons/fi";

export default function UserManagement(){
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [barangays, setBarangays] = useState([]);
    const [form, setForm] = useState({
        barangay_id: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
    });
    const editUser = (user) => {

        setEditingUser(user);

        setForm({
            barangay_id: user.barangay_id,
            name: user.name,
            email: user.email,
            password: "",
            phone: user.phone,
            role: user.role,
        });

        setShowForm(true);

    };

    const fetchUsers = () => {

        api.get("/users")
            .then((response) => {

                setUsers(response.data.data);
            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

        
    };

    useEffect(() => {

        fetchUsers();
        fetchBarangays();

    }, []);

    const saveUser = () => {

        api.post("/users", form)
            .then((response) => {

                fetchUsers();

                setShowForm(false);

                setForm({
                    barangay_id: "",
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    role: "",
                });

                console.log(response.data);

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };
    const fetchBarangays = () => {

        api.get("/barangays")
            .then((response) => {

                setBarangays(response.data);

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };
    const updateUser = () => {

        api.put(`/users/${editingUser.id}`, form)
            .then(() => {

                fetchUsers();

                setShowForm(false);

                setEditingUser(null);

                setForm({
                    barangay_id: "",
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    role: "",
                });

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };
    const deleteUser = (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmed) return;

        api.delete(`/users/${id}`)
            .then(() => {

                fetchUsers();

                alert("User deleted successfully!");

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };
    return (



        <div className="reports-container">
            <div className="reports-header">
                <h1 className="page-title">User Management</h1>
                <button
                    className="add-btn"
                    onClick={() => {
                        setEditingUser(null);

                        setForm({
                            barangay_id: "",
                            name: "",
                            email: "",
                            password: "",
                            phone: "",
                            role: "",
                        });

                        setShowForm(true);
                    }}
                >
                    + Add User
                </button>
            </div>

            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Barangay</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Created at</th>
                        <th>Updated at</th>     
                        <th>Actions</th>               
                    </tr>
                </thead>
                <tbody>

                {users.map((user) => (

                    <tr key={user.id}>

                        <td>{user.barangay?.name}</td>

                        <td>{user.name}</td>

                        <td>{user.email}</td>

                        <td>••••••••</td>

                        <td>{user.phone}</td>

                        <td>{user.role}</td>

                        <td>
                            {new Date(user.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                            })}
                        </td>

                        <td>
                            {new Date(user.updated_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                            })}
                        </td>
                        <td>
                            <div className="action-buttons">
                                <button
                                    className="view-btn"
                                    style={{ backgroundColor: "#06b6d4" }}
                                    onClick={() => editUser(user)}
                                >
                                    <FiEdit />
                                </button>

                                <button
                                    className="view-btn"
                                    style={{ backgroundColor: "#ef4444" }}
                                    onClick={() => deleteUser(user.id)}
                                >
                                    <FiTrash2 />
                                </button>
                            </div>
                        </td>

                    </tr>

                ))}

                </tbody>
            </table>

            {showForm && (

                <div className="modal-overlay">

                    <div className="modal">

                        <div className="modal-header">

                            <h2>{editingUser ? "Update User" : "Add User"}</h2>

                            <button
                                className="close-btn"
                                onClick={() => {

                                    setShowForm(false);

                                    setEditingUser(null);

                                }}
                            >
                                ✕
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="form-row">

                                <div className="form-group">
                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        placeholder="Enter full name"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>

                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group">
                                    <label>Password</label>

                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        value={form.password}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>

                                    <input
                                        type="text"
                                        placeholder="09XXXXXXXXX"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                phone: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group">
                                    <label>Role</label>

                                    <select
                                        value={form.role}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                role: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="">Select Role</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Barangay Official">Barangay Official</option>
                                        <option value="Citizen">Citizen</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Barangay</label>

                                    <select
                                        value={form.barangay_id}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                barangay_id: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="">Select Barangay</option>

                                        {barangays.map((barangay) => (
                                            <option
                                                key={barangay.id}
                                                value={barangay.id}
                                            >
                                                {barangay.name}
                                            </option>
                                        ))}

                                    </select>

                                </div>

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="cancel-btn"
                                    onClick={() => {

                                        setShowForm(false);

                                        setEditingUser(null);

                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={() => {
                                        if (editingUser) {
                                            updateUser();
                                        } else {
                                            saveUser();
                                        }
                                    }}
                                >
                                    {editingUser ? "Update User" : "Save User"}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </div>


    );
}