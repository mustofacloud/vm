import api from "./axios";

// Auth - Login dengan Discord
export const loginDiscord = () => {
    window.location.href = `${api.defaults.baseURL}/auth/discord/callback`;
};

// Auth - Get current user
export const getCurrentUser = async () => {
    try {
        const response = await api.get("/auth/me");
        return response.data;
    } catch (error) {
        console.error("Get current user failed:", error);
        throw error;
    }
};

// Auth - Logout
export const logout = async () => {
    try {
        const response = await api.get("/auth/logout");
        return response.data;
    } catch (error) {
        console.error("Logout failed:", error);
        throw error;
    }
};
