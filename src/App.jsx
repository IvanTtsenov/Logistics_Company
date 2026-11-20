
import { useCallback, useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { getCurrentUser } from './services/api.js';
import { clearAuthSession, readAuthSession, saveAuthSession } from './services/authService.js';

const ALLOWED_PAGES = new Set(['/', '/login', '/register', '/dashboard']);

function currentPath() {
    return ALLOWED_PAGES.has(window.location.pathname) ? window.location.pathname : '/';
}

function App() {
    const [path, setPath] = useState(currentPath);
    const [session, setSession] = useState(readAuthSession);
    const [checkingSession, setCheckingSession] = useState(Boolean(readAuthSession()));

    const navigate = useCallback((nextPath) => {
        if (window.location.pathname !== nextPath) {
            window.history.pushState(null, '', nextPath);
        }
        setPath(nextPath);
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    useEffect(() => {
        const handleBackForward = () => setPath(currentPath());
        window.addEventListener('popstate', handleBackForward);
        return () => window.removeEventListener('popstate', handleBackForward);
    }, []);

    useEffect(() => {
        const stored = readAuthSession();
        if (!stored) return;

        let active = true;
        getCurrentUser(stored.token)
            .then((user) => {
                if (active) setSession({ ...stored, user });
            })
            .catch(() => {
                clearAuthSession();
                if (active) {
                    setSession(null);
                    if (currentPath() === '/dashboard') navigate('/login');
                }
            })
            .finally(() => { if (active) setCheckingSession(false); });

        return () => { active = false; };
    }, [navigate]);

    function handleLogin(tokenResponse, user) {
        const nextSession = saveAuthSession(tokenResponse, user);
        setSession(nextSession);
        navigate('/dashboard');
    }

    function handleLogout() {
        clearAuthSession();
        setSession(null);
        navigate('/');
    }

    if (checkingSession && path === '/dashboard') {
        return <div className="app-loading" role="status">Проверка на сесията...</div>;
    }

    if (path === '/register' && !session) {
        return (
            <div className="registration-shell">
                <div className="register-links">
                    <button type="button" onClick={() => navigate('/')}>← Към началото</button>
                    <button type="button" onClick={() => navigate('/login')}>Вече имаш профил? Вход</button>
                </div>
                <Register />
            </div>
        );
    }

    if (path === '/login' && !session) {
        return <Login onLogin={handleLogin} onNavigate={navigate} />;
    }

    if (path === '/dashboard' || (session && (path === '/login' || path === '/register'))) {
        if (!session) {
            return <Login onLogin={handleLogin} onNavigate={navigate} />;
        }
        return <Dashboard user={session.user} onLogout={handleLogout} onNavigate={navigate} />;
    }

    return <Home user={session?.user} onNavigate={navigate} onLogout={handleLogout} />;
}

export default App;
