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


export default function BarangayManagement(){
    const [barangays, setBarangays] = useState([]);

    const fetchBarangay = () => {

        api.get("/barangays")
            .then((response) => {
                setBarangays(response.data)
            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });
    };

    useEffect(() => {

        fetchBarangay();

    }, []);

    const [showForm, setShowForm] = useState(false);
    const [editingBarangay, setEditingBarangay] = useState(null);

    const [form, setForm] = useState({
        name: "",
        latitude: "",
        longitude: "",
        population: "",
    });

    const saveBarangay = () => {

        api.post("/barangays", form)
            .then(() => {

                fetchBarangay();

                setShowForm(false);

                setForm({
                    name: "",
                    latitude: "",
                    longitude: "",
                    population: "",
                });

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };

    const editBarangay = (barangay) => {

        setEditingBarangay(barangay);

        setForm({
            name: barangay.name,
            latitude: barangay.latitude,
            longitude: barangay.longitude,
            population: barangay.population,
        });

        setShowForm(true);

    };
    const updateBarangay = () => {

        api.put(`/barangays/${editingBarangay.id}`, form)
            .then(() => {

                fetchBarangay();

                setShowForm(false);

                setEditingBarangay(null);

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };

    const deleteBarangay = (id) => {

        if (!window.confirm("Delete this barangay?")) return;

        api.delete(`/barangays/${id}`)
            .then(() => {

                fetchBarangay();

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
                <h1>Barangay Management</h1>
                <button
                    className="add-btn"
                    onClick={() => {

                        setEditingBarangay(null);

                        setForm({
                            name: "",
                            latitude: "",
                            longitude: "",
                            population: "",
                        });

                        setShowForm(true);

                    }}
                >
                    + Add Barangay
                </button>
            </div>

            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Baranagy</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Population</th>
                        <th>Actions</th>                  
                    </tr>
                </thead>
                <tbody>
                    {barangays.map((barangay) => (
                        <tr key={barangay.id}>
                            <td>{barangay.name}</td>
                            <td>{barangay.latitude}</td>
                            <td>{barangay.longitude}</td>
                            <td>{barangay.population}</td>
                            <td>
                            <button
                                className="view-btn"
                                style={{ backgroundColor: "#06b6d4" }}
                                onClick={() => editBarangay(barangay)}
                            >
                                <FiEdit />
                            </button>

                            <button
                                className="view-btn"
                                style={{ backgroundColor: "#ef4444" }}
                                onClick={() => deleteBarangay(barangay.id)}
                            >
                                <FiTrash2 />
                            </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

{showForm && (

    <div className="modal-overlay">

        <div className="modal">

            <div className="modal-header">

                <h2>
                    {editingBarangay ? "Update Barangay" : "Add Barangay"}
                </h2>

                <button
                    className="close-btn"
                    onClick={() => {

                        setShowForm(false);
                        setEditingBarangay(null);

                    }}
                >
                    ✕
                </button>

            </div>

            <div className="modal-body">

                <div className="form-group">

                    <label>Barangay Name</label>

                    <input
                        type="text"
                        placeholder="Enter barangay name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                    />

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Latitude</label>

                        <input
                            type="number"
                            step="0.0000001"
                            placeholder="7.0612000"
                            value={form.latitude}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    latitude: e.target.value,
                                })
                            }
                        />

                    </div>

                    <div className="form-group">

                        <label>Longitude</label>

                        <input
                            type="number"
                            step="0.0000001"
                            placeholder="125.5068000"
                            value={form.longitude}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    longitude: e.target.value,
                                })
                            }
                        />

                    </div>

                </div>

                <div className="form-group">

                    <label>Population</label>

                    <input
                        type="number"
                        placeholder="Enter population"
                        value={form.population}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                population: e.target.value,
                            })
                        }
                    />

                </div>

                <div className="modal-footer">

                    <button
                        className="cancel-btn"
                        onClick={() => {

                            setShowForm(false);

                            setEditingBarangay(null);

                        }}
                    >
                        Cancel
                    </button>

                    <button
                        className="save-btn"
                        onClick={() => {

                            if (editingBarangay) {

                                updateBarangay();

                            } else {

                                saveBarangay();

                            }

                        }}
                    >
                        {editingBarangay
                            ? "Update Barangay"
                            : "Save Barangay"}
                    </button>

                </div>

            </div>

        </div>

    </div>

)}
        </div>
    )
}