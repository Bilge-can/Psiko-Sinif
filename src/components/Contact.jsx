import React, { useState } from "react";
import "../styles/Contact.css";
import Inputs from "./Inputs";


export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mesajınız gönderildi 💌");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h1>İletişim</h1>
            <p>
                Sorularınız, önerileriniz veya iş birliği talepleriniz için bize
                ulaşabilirsiniz 💬
            </p>
            <Inputs>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Ad Soyad</label>
                <label htmlFor="email">E-posta</label>
                <label htmlFor="message">Mesajınız</label>
                <button type="submit">Gönder</button>
            </form>
            </Inputs>

            <div className="contact-info">
                <p>
                    E-posta: <a href="mailto:info@psikosinif.com">info@psikosinif.com</a>
                </p>
                <p>
                    Instagram:{" "}
                    <a href="https://instagram.com/psikosinif" target="_blank" rel="noreferrer">
                        @psikosinif
                    </a>
                </p>
            </div>
        </div>
    );
}
