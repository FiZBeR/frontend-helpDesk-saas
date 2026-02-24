import { createContext, useState, useEffect } from "react";
import api from '../api/axios'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null)

    useEffect(() => {

        const token = localStorage.getItem('access')
        if(token){
            setUser({isAuthenticated: true});
        }

        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const response = await api.post('login/', { username, password});
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            setUser({ isAuthenticated: true});
            return true
        } catch (error) {
            console.log("Error en login", error.response?.data);
            return false
        }
    }

    const logout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setUser(null)
    }

    const value = {
        user,
        loading,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}