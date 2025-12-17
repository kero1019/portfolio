"use client";
import React, { createContext, useState, ReactNode } from "react";

// 1. Define the shape of your context
interface MyContextType {
    value: boolean;
    setValue: (newValue: boolean) => void;
}

// 2. Create the context with a default value (can be null initially)
export const MyContext = createContext<MyContextType | undefined>(undefined);

// 3. Create the provider component
interface MyProviderProps {
    children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [value, setValue] = useState<boolean>(true);

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};
