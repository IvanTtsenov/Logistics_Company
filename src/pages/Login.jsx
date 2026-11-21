// import { useState } from 'react';
// import { login, getCurrentUser } from '../services/api.js';
// import Icon from '../components/Icon.jsx';
// import '../css/login.css';

// function Login({ onLogin, onNavigate }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     async function handleSubmit(event) {
//         event.preventDefault();
//         setError('');
//         setLoading(true);

//         try {
//             const tokenResponse = await login({ email: email.trim(), password });
//             const user = await getCurrentUser(tokenResponse.token);
//             onLogin(tokenResponse, user);
//         } catch (err) {
//             setError(err instanceof TypeError
//                 ? 'Не може да се осъществи връзка със сървъра. Стартирайте Spring Boot.'
//                 : (err.message || 'Възникна грешка при вход.'));
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <div className="login-page">
//             <div className="login-brand-panel"><div className="login-brand-mark"><span><Icon name="package" size={26}/></span> LOGIS<span className="orange-period">.</span></div><div className="login-panel-content"><div className="login-panel-kicker">ДОБРЕ ДОШЛИ ОБРАТНО</div><h2>Всичко за вашите<br/><span>доставки на едно място.</span></h2><p>Влезте в системата, за да видите профила си и да получите достъп до информацията за вашите пратки.</p><div className="login-steps"><div><Icon name="shield" size={21}/> Защитен достъп с JWT</div><div><Icon name="package" size={21}/> Информация само за вашите пратки</div><div><Icon name="truck" size={21}/> Удобно проследяване</div></div></div><div className="login-panel-bottom">LOGIS · Логистична система</div></div>
//             <div className="login-form-panel">
//                 <button type="button" className="login-back" onClick={() => onNavigate('/')}><Icon name="arrowRight" size={16}/> Към началото</button>
//                 <div className="login-form-container"><div className="login-mobile-logo"><span className="logo-mark"><Icon name="package" size={23}/></span><strong>LOGIS.</strong></div><div className="login-form-eyebrow">ВХОД В ПРОФИЛА</div><h1>Здравейте отново!</h1><p className="login-intro">Въведете имейла и паролата си, за да продължите.</p>
//                     <form onSubmit={handleSubmit} className="login-form">
//                         <label htmlFor="login-email">Имейл</label><div className="login-input-wrapper"><Icon name="mail" size={19}/><input id="login-email" type="email" autoComplete="username" placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)} required/></div>
//                         <div className="login-password-label"><label htmlFor="login-password">Парола</label></div><div className="login-input-wrapper"><Icon name="lock" size={19}/><input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Въведете вашата парола" value={password} onChange={event => setPassword(event.target.value)} required/><button className="toggle-password" type="button" aria-label={showPassword ? 'Скрий паролата' : 'Покажи паролата'} aria-pressed={showPassword} onClick={() => setShowPassword(value => !value)}><Icon name={showPassword ? 'eyeOff' : 'eye'} size={19}/></button></div>
//                         {error && <div className="login-error" role="alert">{error}</div>}
//                         <button className="login-submit" type="submit" disabled={loading}>{loading ? 'Проверяваме данните...' : 'Вход в системата'} {!loading && <Icon name="arrowRight" size={18}/>}</button>
//                     </form>
//                     <p className="login-register-link">Нямате акаунт? <button type="button" onClick={() => onNavigate('/register')}>Регистрирайте се</button></p>
//                     <div className="login-help"><Icon name="shield" size={15}/> Достъп с удостоверяване чрез JWT</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import { useState } from 'react';
import { Link } from 'react-router';
import { login, getCurrentUser } from '../services/api.js';
import Icon from '../components/Icon.jsx';
import '../css/login.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const tokenResponse = await login({ email: email.trim(), password });
            const user = await getCurrentUser(tokenResponse.token);
            onLogin(tokenResponse, user);
        } catch (err) {
            setError(err instanceof TypeError
                ? 'Не може да се осъществи връзка със сървъра. Стартирайте Spring Boot.'
                : (err.message || 'Възникна грешка при вход.'));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-page">
            <div className="login-brand-panel">
                <div className="login-brand-mark">
                    <span><Icon name="package" size={26}/></span> LOGIS<span className="orange-period">.</span>
                </div>
                <div className="login-panel-content">
                    <div className="login-panel-kicker">ДОБРЕ ДОШЛИ ОБРАТНО</div>
                    <h2>Всичко за вашите<br/><span>доставки на едно място.</span></h2>
                    <p>Влезте в системата, за да видите профила си и да получите достъп до информацията за вашите пратки.</p>
                    <div className="login-steps">
                        <div><Icon name="shield" size={21}/> Защитен достъп с JWT</div>
                        <div><Icon name="package" size={21}/> Информация само за вашите пратки</div>
                        <div><Icon name="truck" size={21}/> Удобно проследяване</div>
                    </div>
                </div>
                <div className="login-panel-bottom">LOGIS · Логистична система</div>
            </div>

            <div className="login-form-panel">
                <Link to="/" className="login-back">
                    <Icon name="arrowRight" size={16}/> Към началото
                </Link>

                <div className="login-form-container">
                    <div className="login-mobile-logo">
                        <span className="logo-mark"><Icon name="package" size={23}/></span>
                        <strong>LOGIS.</strong>
                    </div>
                    <div className="login-form-eyebrow">ВХОД В ПРОФИЛА</div>
                    <h1>Здравейте отново!</h1>
                    <p className="login-intro">Въведете имейла и паролата си, за да продължите.</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <label htmlFor="login-email">Имейл</label>
                        <div className="login-input-wrapper">
                            <Icon name="mail" size={19}/>
                            <input
                                id="login-email"
                                type="email"
                                autoComplete="username"
                                placeholder="name@example.com"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        <div className="login-password-label">
                            <label htmlFor="login-password">Парола</label>
                        </div>
                        <div className="login-input-wrapper">
                            <Icon name="lock" size={19}/>
                            <input
                                id="login-password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                placeholder="Въведете вашата парола"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                required
                            />
                            <button
                                className="toggle-password"
                                type="button"
                                aria-label={showPassword ? 'Скрий паролата' : 'Покажи паролата'}
                                aria-pressed={showPassword}
                                onClick={() => setShowPassword(value => !value)}
                            >
                                <Icon name={showPassword ? 'eyeOff' : 'eye'} size={19}/>
                            </button>
                        </div>

                        {error && <div className="login-error" role="alert">{error}</div>}

                        <button className="login-submit" type="submit" disabled={loading}>
                            {loading ? 'Проверяваме данните...' : 'Вход в системата'} {!loading && <Icon name="arrowRight" size={18}/>}
                        </button>
                    </form>

                    <p className="login-register-link">
                        Нямате акаунт? <Link to="/register">Регистрирайте се</Link>
                    </p>
                    <div className="login-help"><Icon name="shield" size={15}/> Достъп с удостоверяване чрез JWT</div>
                </div>
            </div>
        </div>
    );
}

export default Login;