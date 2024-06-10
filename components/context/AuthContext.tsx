'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextProps {
    signin: boolean
    signup: boolean
    setSignin: React.Dispatch<React.SetStateAction<boolean>>
    setSignup: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [signin, setSignin] = useState<boolean>(false)
    const [signup, setSignup] = useState<boolean>(false)

    return (
        <AuthContext.Provider value={{ signin, signup, setSignin, setSignup }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
