import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, register, resetPassword, getUserProfile } from '../services/api';

const AuthContext = createContext();

// Custom hook to use the Auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch user profile if the user is logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const fetchUserProfile = async () => {
                try {
                    const response = await getUserProfile(token); // Assuming the token is the userId
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to fetch user profile:', error);
                }
                setLoading(false);
            };

            fetchUserProfile();
        } else {
            setLoading(false);
        }
    }, []);

    // Login function
    const handleLogin = async (credentials) => {
        try {
            const response = await login(credentials);
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    // Register function
    const handleRegister = async (userData) => {
        try {
            const response = await register(userData);
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    // Logout function
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    // Reset password function
    const handleResetPassword = async (email) => {
        try {
            await resetPassword(email);
        } catch (error) {
            console.error('Password reset failed:', error);
            throw error;
        }
    };

    const value = {
        user,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
        handleResetPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
