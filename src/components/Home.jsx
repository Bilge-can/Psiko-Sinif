import React from "react";
import "../styles/Home.css";

export default function Home() {
    return (
        <section className="home">
            <div className="hero">
                <h1>Psikolojik Rahatsızlıkları Keşfet</h1>
                <p>Zihinsel sağlıkla ilgili farkındalık kazanın, her şey bilgiyle başlar.</p>
                <a href="/Disorders" className="btn-primary">Keşfet</a>
            </div>
        </section>
    );
}
