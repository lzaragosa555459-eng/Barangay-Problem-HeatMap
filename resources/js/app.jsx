import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// 'sudo mysql' to open mysql in wsl
// npm run dev
// code .
function App() {

    return (
        <div>
            <h1>Barangay community problem monitoring</h1>
        <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter email"/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter password"/>

            
        </form>

        </div>
        
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
