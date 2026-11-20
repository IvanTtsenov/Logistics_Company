const STORAGE_KEY = "logis.auth";

export function saveAuthSession(tokenResponse, user) {
    const session = {
        token: tokenResponse.token,
        // Използваме expiresIn от backend, вместо да приемаме фиксиран срок.
        expiresAt: Date.now() + tokenResponse.expiresIn * 1000,
        user,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return session;
}

export function readAuthSession() {
    try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (!stored) return null;
        const session = JSON.parse(stored);
        if (!session.token || !session.expiresAt || Date.now() >= session.expiresAt) {
            clearAuthSession();
            return null;
        }
        return session;
    } catch {
        clearAuthSession();
        return null;
    }
}

export function clearAuthSession() {
    sessionStorage.removeItem(STORAGE_KEY);
}
