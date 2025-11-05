import React from "react";
import DisorderCard from "./DisorderCard";
import disorders from "../data/disorders"; // 📁 doğru yol önemli
import "../styles/Disorders.css";

export default function Disorders() {
    if (!disorders || disorders.length === 0) {
        return <p style={{ textAlign: "center" }}>Veri bulunamadı 😢</p>;
    }

    return (
        <section className="disorder-list">
            {disorders.map((d) => (
                <DisorderCard key={d.name} disorder={d} />
            ))}
        </section>
    );
}
