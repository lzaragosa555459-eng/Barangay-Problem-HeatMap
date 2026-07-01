import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// 'sudo mysql' to open mysql in wsl
// npm run dev
// code .
function App() {

    function text() {
           setMessage('hii');
    }

    const [message, setMessage] = useState();

    return (
        <div>
            <h1>Barangay Heat Project 🚀</h1>
            <h2>Ohayo sekay, Good morning Worlddd!!</h2>
            <h4>{message}</h4>
            <button onClick={text} type="button">Say hi</button>
        </div>
        
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
