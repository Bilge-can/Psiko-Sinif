import React from "react";
import "../styles/About.css";

export default function About() {
    return (
        <div className="about-container">
            <h1>PsikoSınıf Hakkında</h1>
            <p>
                <span className="highlight">PsikoSınıf</span>, psikolojik rahatsızlıkları,
                bozuklukları ve zihinsel süreçleri sade bir dille anlatmak için
                oluşturulmuş bir platformdur. Amacımız; bilgilendirici, anlaşılır ve
                güvenilir içerikler sunmaktır.
            </p>

            <h2>Vizyonumuz</h2>
            <p>
                Her bireyin psikolojik farkındalığının artmasına katkıda bulunmak,
                ruh sağlığını destekleyen içeriklerle topluma değer katmak.
            </p>

            <h2>Misyonumuz</h2>
            <p>
                Bilimsel dayanaklı bilgileri kolay anlaşılır hale getirerek,
                insanların psikolojik süreçleri anlamasına yardımcı olmak.
            </p>

            <div className="team-section">
                <h2>Ekibimiz</h2>
                <img src="/images/team1.jpg" alt="Ekip Üyesi 1" />
                <img src="/images/team2.jpg" alt="Ekip Üyesi 2" />
            </div>

            <div className="quote">
                “Kendini anlamak, dünyayı anlamanın ilk adımıdır.” 💭
            </div>
        </div>
    );
}
