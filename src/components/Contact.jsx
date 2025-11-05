import React, { useState } from "react";
import "../styles/Contact.css";

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

            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Ad Soyad</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">E-posta</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Mesajınız</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Gönder</button>
            </form>

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
