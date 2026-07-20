import { useEffect, useState } from "react";
import api from "../services/api";


export default function BarangayManagement(){
    const [barangays, setBarangays] = useState([]);

    const fetchBarangay = () => {

        api.get("/barangays")
            .then((response) => {
                setBarangays(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {

        fetchBarangay();

    }, []);

    return (
        <div className="reports-container">
            <div className="reports-header">
                <h1>Barangay Management</h1>
                <button>Add</button>
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
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}