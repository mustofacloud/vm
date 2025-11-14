import api from "./axios";

// Get all shows
export const getShows = async () => {
    try {
        const response = await api.get("/shows");
        return response.data;
    } catch (error) {
        console.error("Get shows failed:", error);
        throw error;
    }
};

// Get single show by ID
export const getShowById = async (id) => {
    try {
        const response = await api.get(`/shows/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Get show ${id} failed:`, error);
        throw error;
    }
};

// Create show (admin only) - multipart form-data
export const createShow = async (formData) => {
    try {
        const response = await api.post("/shows", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Create show failed:", error);
        throw error;
    }
};

// Update show (admin only) - multipart form-data
export const updateShow = async (id, formData) => {
    try {
        const response = await api.put(`/shows/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Update show ${id} failed:`, error);
        throw error;
    }
};

// Delete show (admin only)
export const deleteShow = async (id) => {
    try {
        const response = await api.delete(`/shows/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Delete show ${id} failed:`, error);
        throw error;
    }
};
