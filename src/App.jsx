import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet, useNavigate, useLocation } from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NotFound from './pages/NotFound.jsx';
import { getCurrentUser } from './services/api.js';
import { clearAuthSession, readAuthSession, saveAuthSession } from './services/authService.js';

// /login and /register: only for logged-out users
function LoggedOut({ session }) {
    return session ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

// /dashboard: only for logged-in users
function LoggedIn({ session, checking }) {
    if (checking) {
        return <div className="app-loading" role="status">Проверка на сесията...</div>;
    }
    return session ? <Outlet /> : <Navigate to="/login" replace />;
}

function App() {
    const { pathname } = useLocation();
    useEffect(() => window.scrollTo(0, 0), [pathname]);

    const navigate = useNavigate();
    const [session, setSession] = useState(readAuthSession);
    const [checkingSession, setCheckingSession] = useState(Boolean(readAuthSession()));

    useEffect(() => {
        const stored = readAuthSession();
        if (!stored) return;

        let active = true;
        getCurrentUser(stored.token)
            .then((user) => { if (active) setSession({ ...stored, user }); })
            .catch(() => {
                clearAuthSession();
                if (active) setSession(null); // <Protected> redirects to /login automatically
            })
            .finally(() => { if (active) setCheckingSession(false); });

        return () => { active = false; };
    }, []);

    function handleLogin(tokenResponse, user) {
        setSession(saveAuthSession(tokenResponse, user));
        navigate('/dashboard');
    }

    function handleLogout() {
        clearAuthSession();
        setSession(null);
        navigate('/');
    }
    return (
        <>
            <Routes>
                <Route path="/" element={<Home user={session?.user} onLogout={handleLogout} />} />

                <Route element={<LoggedOut session={session} />}>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<LoggedIn session={session} checking={checkingSession} />}>
                    <Route path="/dashboard" element={<Dashboard user={session?.user} onLogout={handleLogout} />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;