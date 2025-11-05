import { Link } from "react-router-dom";
import "../styles/DisorderCard.css";

export default function DisorderCard({ disorder }) {
    const slug = disorder.name.toLowerCase().replace(/\s+/g, "-");
    return (
        <Link to={`/disorders/${slug}`} className="card">
            <div className="card-body">
                <h3>{disorder.name}</h3>
                <p className="category">{disorder.category}</p>
                <p className="short">{disorder.short}</p>
            </div>
        </Link>
    );
}
