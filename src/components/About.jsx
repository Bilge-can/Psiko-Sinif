import React from "react";
import "../styles/About.css";
import { Avatar, AvatarGroup } from "rsuite";

export default function About() {
    return (
        <div className="about-container">
            <h1>PsikoSınıf Hakkında</h1>
            <p>
                <span className="highlight">PsikoSınıf</span>, psikolojik rahatsızlıkları,
                bozuklukları ve zihinsel süreçleri sade bir dille anlatmak için
                oluşturulmuş bir platformdur.
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

                <div className="avatars-wrapper">
                    <AvatarGroup spacing={16}>
                        <Avatar
                            color="violet"
                            bordered
                            circle src="https://i.pravatar.cc/150?u=4"
                            size="lg"
                            className="team-avatar"
                        />
                        <Avatar
                            color="violet"
                            bordered
                            circle src="https://i.pravatar.cc/150?u=1"
                            size="lg"
                            className="team-avatar"
                        />
                    </AvatarGroup>
                </div>

                <div className="quote">
                    “Kendini anlamak, dünyayı anlamanın ilk adımıdır.” 💭
                </div>
            </div>
        </div>
    );
}
