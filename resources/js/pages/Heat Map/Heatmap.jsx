import { useEffect, useState } from "react";
import api from "../../services/api";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet.heat";

    function HeatLayer({ reports }) {
        const map = useMap();

        useEffect(() => {

            if (!reports.length) return;

            const points = reports.map(report => {

                let intensity = 0.4;

                if (report.severity === "Medium") intensity = 0.6;
                if (report.severity === "High") intensity = 0.8;
                if (report.severity === "Critical") intensity = 1.0;

                return [
                    Number(report.latitude),
                    Number(report.longitude),
                    intensity
                ];

            });

            const heat = L.heatLayer(points, {
                radius: 35,
                blur: 25,
                maxZoom: 17,
            });

            heat.addTo(map);

            return () => {
                map.removeLayer(heat);
            };

        }, [reports, map]);

        return null;
    }

export default function Heatmap() {

    const [reports, setReports] = useState([]);

    useEffect(() => {

        api.get("/reports-map")
            .then((response) => {
                setReports(response.data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (

        <div className="heatmap-page">

            <MapContainer
                center={[7.0731, 125.6128]}
                zoom={12}
                className="leaflet-map"
            >

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <HeatLayer reports={reports} />

            </MapContainer>

        </div>

    );
}