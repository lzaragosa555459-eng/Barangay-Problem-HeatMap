import { useEffect, useState } from "react"
import api from "../services/api";

export default function ProblemCategoryManagement(){
    const [problemCategories, setProblemCategories] = useState([]);
    
    const fetchProblemCategory = () => {
        api.get("/problem-categories")
            .then((response) => {
                setProblemCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchProblemCategory();
    }, []);

    return (
        <div className="reports-container">
            <div className="reports-header">
                <h1>Problem Category Management</h1>
            </div>

       

            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>Color</th>
                        <th>Description</th>                   
                    </tr>
                </thead>    
                <tbody>
                {problemCategories.map((problemCategory) => (
                    <tr key={problemCategory.id}>
                        <td>{problemCategory.name}</td>
                        <td>{problemCategory.icon}</td>
                        <td>{problemCategory.color}</td>
                        <td>{problemCategory.description ? problemCategory.description : "None"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}