// import { useState } from 'react';
// import Icon from './Icon.jsx';

// // Общата навигация. При гост показва Вход/Регистрация;
// // при влязъл потребител показва профила и Изход.
// function Navbar({ user, onNavigate, onLogout, dashboard = false }) {
//     const [menuOpen, setMenuOpen] = useState(false);

//     function go(path) {
//         setMenuOpen(false);
//         onNavigate(path);
//     }

//     return (
//         <header className="site-header">
//             <div className="site-header-inner">
//                 <button type="button" className="site-brand" onClick={() => go('/')} aria-label="LOGIS — начало">
//                     <span className="logo-mark"><Icon name="package" size={23}/></span>
//                     <span className="logo-text"><strong>LOGIS<span>.</span></strong><small>ЛОГИСТИЧНА СИСТЕМА</small></span>
//                 </button>

//                 <button type="button" className="mobile-nav-toggle" aria-label="Отвори или затвори менюто" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
//                     <Icon name={menuOpen ? 'x' : 'menu'} size={23}/>
//                 </button>

//                 <nav className={`site-navigation ${menuOpen ? 'site-navigation-open' : ''}`} aria-label="Основна навигация">
//                     <button type="button" className={!dashboard ? 'nav-selected' : ''} onClick={() => go('/')}>Начало</button>
//                     {!dashboard && <>
//                         <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
//                         <a href="#how-it-works" onClick={() => setMenuOpen(false)}>Как работи</a>
//                     </>}
//                     {user ? (
//                         <div className="nav-actions">
//                             <button type="button" className="nav-profile" onClick={() => go('/dashboard')}><Icon name="user" size={17}/> Моят профил</button>
//                             <button type="button" className="nav-signup" onClick={onLogout}>Изход <Icon name="logout" size={16}/></button>
//                         </div>
//                     ) : (
//                         <div className="nav-actions">
//                             <button type="button" className="nav-login" onClick={() => go('/login')}>Вход</button>
//                             <button type="button" className="nav-signup" onClick={() => go('/register')}>Регистрация <Icon name="arrowRight" size={16}/></button>
//                         </div>
//                     )}
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Navbar;

import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Icon from './Icon.jsx';

// Общата навигация. При гост показва Вход/Регистрация;
// при влязъл потребител показва профила и Изход.
function Navbar({ user, onLogout, dashboard = false }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link to="/" className="site-brand" onClick={closeMenu} aria-label="LOGIS — начало">
                    <span className="logo-mark"><Icon name="package" size={23}/></span>
                    <span className="logo-text"><strong>LOGIS<span>.</span></strong><small>ЛОГИСТИЧНА СИСТЕМА</small></span>
                </Link>

                <button type="button" className="mobile-nav-toggle" aria-label="Отвори или затвори менюто" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                    <Icon name={menuOpen ? 'x' : 'menu'} size={23}/>
                </button>

                <nav className={`site-navigation ${menuOpen ? 'site-navigation-open' : ''}`} aria-label="Основна навигация">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-selected' : '')} onClick={closeMenu}>
                        Начало
                    </NavLink>
                    {!dashboard && <>
                        <a href="#services" onClick={closeMenu}>Услуги</a>
                        <a href="#how-it-works" onClick={closeMenu}>Как работи</a>
                    </>}
                    {user ? (
                        <div className="nav-actions">
                            <Link to="/dashboard" className="nav-profile" onClick={closeMenu}>
                                <Icon name="user" size={17}/> Моят профил
                            </Link>
                            <button type="button" className="nav-signup" onClick={() => { closeMenu(); onLogout(); }}>
                                Изход <Icon name="logout" size={16}/>
                            </button>
                        </div>
                    ) : (
                        <div className="nav-actions">
                            <Link to="/login" className="nav-login" onClick={closeMenu}>Вход</Link>
                            <Link to="/register" className="nav-signup" onClick={closeMenu}>
                                Регистрация <Icon name="arrowRight" size={16}/>
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
