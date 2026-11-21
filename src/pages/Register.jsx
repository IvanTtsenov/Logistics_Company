import "../css/forms.css";
import { register } from "../services/api";
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';


function Register() {
    const navigate = useNavigate();
     const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if (data.firstName.trim().length <= 1) {
            setError("Името трябва да е поне 2 символа!");
            return;
        }

        if (data.password.length < 6) {
            setError("паролата трябва да е поне 6 символа");
            return;
        }

        try {
            setError('');
            await register(data);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="registration-shell">
            <div className="register-links">
                <Link to="/">← Към началото</Link>
                <Link to="/login">Вече имаш профил? Вход</Link>
            </div>
            <div className="register-page">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Регистрация</h2>

                    <label htmlFor="firstName">Име</label>
                    <input id="firstName" type="text" name="firstName" required />

                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" type="text" name="lastName" required />

                    <label htmlFor="email">Имейл</label>
                    <input id="email" type="email" name="email" required />

                    <label htmlFor="phone">Телефон</label>
                    <input id="phone" type="tel" name="phone" required />

                    <label htmlFor="password">Парола</label>
                    <input id="password" type="password" name="password" minLength={6} required />
                    
                    <button type="submit">Регистрация</button>
                    {error && <div className="register-error" role="alert">{error}</div>}

                </form>
            </div>
        </div>

    );
}

export default Register;