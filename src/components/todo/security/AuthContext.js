import { createContext, useContext, useState } from "react";


//1. create Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


//2. share the created context with other componesnt
export default function AuthProvider({ children }) {

    //3. put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if (username === 'Yohannes' && password == 'dummy') {
            setAuthenticated(true)
            return true
        }
        else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// 