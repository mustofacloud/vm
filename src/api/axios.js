import axios from "axios";

const instance = axios.create({
    baseURL: "https://jkt48ticket.vercel.app/",
    withCredentials: true,
    timeout: 10000,
});

// Request interceptor untuk logging
instance.interceptors.request.use(
    (config) => {
        console.log("API Request:", config.url);
        return config;
    },
    (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

// Response interceptor untuk error handling
instance.interceptors.response.use(
    (response) => {
        console.log("API Response:", response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            // Server responded with error status
            console.error("Response Error:", error.response.status, error.response.data);
        } else if (error.request) {
            // Request made but no response
            console.error("No Response Error:", error.message);
            console.error("Trying to reach:", error.config?.baseURL + error.config?.url);
        } else {
            // Error in request setup
            console.error("Setup Error:", error.message);
        }
        return Promise.reject(error);
    }
);

export default instance;
