import { createContext, useEffect, useState } from "react";
import { getCurrentUser, loginDiscord } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const data = await getCurrentUser();
            setUser(data.user);
        } catch (error) {
            console.warn("User fetch failed:", error.message);
            // Silently fail - user is not authenticated yet
        }
    };

    useEffect(() => { 
        fetchUser(); 
    }, []);

    const login = () => {
        loginDiscord();
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

