import React from "react";
import { useParams } from "react-router-dom";
import disorders from "../data/disorders";
import "../styles/DisorderDetail.css";

export default function DisorderDetail() {
    const { name } = useParams();
    const disorder = disorders.find(
        (d) => d.name.toLowerCase().replace(/\s+/g, "-") === name
    );

    if (!disorder) return <p style={{ textAlign: "center" }}>Bulunamadı 😢</p>;

    return (
        <div className="detail-page">
            <h2>{disorder.name}</h2>
            <h3>{disorder.category}</h3>
            <p>{disorder.short}</p>
            {disorder.detail && <p>{disorder.detail}</p>}
            <h4 className="symptoms">{disorder.symptoms}</h4>
            <h5 className="treatment">{disorder.treatment}</h5>
            <h6 className="caution">{disorder.caution}</h6>
        </div>
    );
}
