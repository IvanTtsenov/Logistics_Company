import { Link } from 'react-router';
import "../css/notfound.css";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Страницата не е намерена.</p>
            <Link to="/">← Към началото</Link>
        </div>
    );
}

export default NotFound;