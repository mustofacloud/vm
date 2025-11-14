import api from "./axios";

// Create checkout (login required)
export const createCheckout = async (showId, quantity) => {
    try {
        const response = await api.post("/checkout/create", {
            showId,
            quantity,
        });
        return response.data;
    } catch (error) {
        console.error("Create checkout failed:", error);
        throw error;
    }
};

// Handle Midtrans notification
// This endpoint should be called from backend webhook, not from frontend
// Kept here for reference
export const handleMidtransNotification = async (notification) => {
    try {
        const response = await api.post("/midtrans/notification", notification);
        return response.data;
    } catch (error) {
        console.error("Midtrans notification failed:", error);
        throw error;
    }
};
