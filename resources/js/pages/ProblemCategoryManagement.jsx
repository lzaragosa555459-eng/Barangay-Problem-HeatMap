import { useEffect, useState } from "react"
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

export default function ProblemCategoryManagement(){
    const [problemCategories, setProblemCategories] = useState([]);
    
    const fetchProblemCategory = () => {
        api.get("/problem-categories")
            .then((response) => {
                setProblemCategories(response.data);
            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });
    }

    useEffect(() => {
        fetchProblemCategory();
    }, []);

    const [showForm, setShowForm] = useState(false);

    const [editingCategory, setEditingCategory] = useState(null);

    const [form, setForm] = useState({
        name: "",
        icon: "",
        color: "#2563eb",
        description: "",
});
    const saveCategory = () => {

        api.post("/problem-categories", form)
            .then(() => {

                fetchProblemCategory();

                setShowForm(false);

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };
    const editCategory = (category) => {

        setEditingCategory(category);

        setForm({
            name: category.name,
            icon: category.icon,
            color: category.color,
            description: category.description ?? "",
        });

        setShowForm(true);

    };
    const updateCategory = () => {

        api.put(`/problem-categories/${editingCategory.id}`, form)
            .then(() => {

                fetchProblemCategory();

                setShowForm(false);

                setEditingCategory(null);

            })
            .catch((error) => {

                console.error(error);

                if (error.response) {
                    console.log(error.response.data);
                }

            });

    };
    const deleteCategory = (id) => {

        if (!window.confirm("Delete this category?")) return;

        api.delete(`/problem-categories/${id}`)
            .then(() => {

                fetchProblemCategory();

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
                <h1 className="page-title">Problem Category Management</h1>
                <button
                    className="add-btn"
                    onClick={() => {
                        setEditingCategory(null);

                        setForm({
                            name: "",
                            icon: "",
                            color: "#2563eb",
                            description: "",
                        });

                        setShowForm(true);
                    }}
                >
                    + Add Category
                </button>
            </div>

            

            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>Color</th>
                        <th>Description</th>       
                        <th>Actions</th>            
                    </tr>
                </thead>    
                <tbody>
                {problemCategories.map((problemCategory) => (
                    <tr key={problemCategory.id}>
                        <td>{problemCategory.name}</td>
                        <td>{problemCategory.icon}</td>
                        <td>{problemCategory.color}</td>
                        <td>{problemCategory.description ? problemCategory.description : "None"}</td>
                        <td>

                            <button
                                className="view-btn"
                                style={{ background: "#06b6d4" }}
                                onClick={() => editCategory(problemCategory)}
                            >
                                <FiEdit />
                            </button>
                            
                            <button
                                className="view-btn"
                                style={{ background: "#ef4444" }}
                                onClick={() => deleteCategory(problemCategory.id)}
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
                                {editingCategory ? "Update Problem Category" : "Add Problem Category"}
                            </h2>

                            <button
                                className="close-btn"
                                onClick={() => {

                                    setShowForm(false);

                                    setEditingCategory(null);

                                }}
                            >
                                ✕
                            </button>

                        </div>

                        <div className="modal-body">

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Category Name</label>

                                    <input
                                        type="text"
                                        placeholder="Flood"
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

                                    <label>Icon</label>

                                    <input
                                        type="text"
                                        placeholder="water"
                                        value={form.icon}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                icon: e.target.value,
                                            })
                                        }
                                    />

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Color</label>

                                    <input
                                        type="color"
                                        value={form.color}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                color: e.target.value,
                                            })
                                        }
                                    />

                                </div>

                                <div
                                    className="form-group"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >

                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "12px",
                                            border: "2px solid #ddd",
                                            background: form.color,
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="form-group">

                                <label>Description</label>

                                <textarea
                                    rows="5"
                                    placeholder="Enter description..."
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            description: e.target.value,
                                        })
                                    }
                                />

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="cancel-btn"
                                    onClick={() => {

                                        setShowForm(false);

                                        setEditingCategory(null);

                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-btn"
                                    onClick={() => {

                                        if (editingCategory) {

                                            updateCategory();

                                        } else {

                                            saveCategory();

                                        }

                                    }}
                                >
                                    {editingCategory
                                        ? "Update Category"
                                        : "Save Category"}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </div>
    )
}