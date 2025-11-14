import api from "./axios";

// Health Check
export const checkHealth = async () => {
    try {
        const response = await api.get("/health");
        return response.data;
    } catch (error) {
        console.error("Health check failed:", error);
        throw error;
    }
};
