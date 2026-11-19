// Адрес на Spring Boot бекенда
export const API_URL = "";

export async function register(data) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Регистрацията е неуспешна");
    }
    alert("SUCCESS");
}