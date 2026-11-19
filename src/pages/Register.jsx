import "../css/forms.css";
import { register } from "../services/api";

function Register() {
    async function handleSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        
        if(data.firstName.trim().length <= 1){
            alert("Името трябва да е поне 2 символа!");
            return;
        }

        if(data.password.length < 6){
            alert("паролата трябва да е поне 6 символа");
            return;
        }

        try {
            await register(data);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
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
            </form>
        </div>
    );
}

export default Register;