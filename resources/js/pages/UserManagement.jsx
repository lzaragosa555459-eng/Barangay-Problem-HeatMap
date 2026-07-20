import { useEffect, useState } from "react";
import api from "../services/api";


export default function UserManagement(){
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {

        api.get("/users")
            .then((response) => {

                setUsers(response.data.data);
            })
            .catch((error) => {
                
                console.log(error);
            });

        
    };

    useEffect(() => {

        fetchUsers();

    }, []);

    return (



        <div className="reports-container">
            <div className="reports-header">
                <h1>User Management</h1>
                <button>Add</button>
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
                            <button>Update</button>
                            <button>Delete</button>
                        </td>

                    </tr>

                ))}

                </tbody>
            </table>


        </div>
    );
}