import { useEffect, useState } from "react";
import api from "../services/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Heatmap() {

    const [reports, setReports] = useState([]);

    useEffect(() => {

        api.get("/reports")
            .then((response) => {
                console.log(response.data);
                setReports(response.data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (

        <MapContainer
            center={[7.0731, 125.6128]}
            zoom={12}
            style={{ height: "90vh", width: "100%" }}
        >

            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {reports.map((report) => (

                <Marker
                    key={report.id}
                    position={[
                        Number(report.latitude),
                        Number(report.longitude)
                    ]}
                >

                    <Popup>
                        <h3>{report.title}</h3>

                        <p>Status: {report.status}</p>

                        <p>Severity: {report.severity}</p>
                    </Popup>

                </Marker>

            ))}

        </MapContainer>

    );
}