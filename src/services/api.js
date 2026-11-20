// Адрес на Spring Boot бекенда
export const API_URL = "";

export async function register(data) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message);
    }else {
        alert("SUCCESS");
    }
}


export async function login(credentials) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Неправилен имейл или парола.");
        }
        throw new Error(await readError(response, "Входът не беше успешен."));
    }

    const data = await response.json();
    if (!data.token || !data.role || !Number.isFinite(data.expiresIn)) {
        throw new Error("Сървърът върна невалиден отговор за вход.");
    }
    return data;
}

export async function getCurrentUser(token) {
    const response = await fetch(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
        throw new Error(await readError(response, "Сесията е изтекла. Влезте отново."));
    }
    return response.json();
}

async function readError(response, fallback) {
    try {
        const data = await response.json();
        return data.message || data.detail || data.error || fallback;
    } catch {
        return response.status === 502 || response.status === 503
            ? "Сървърът не е достъпен. Проверете дали Spring Boot работи."
            : fallback;
    }
}
