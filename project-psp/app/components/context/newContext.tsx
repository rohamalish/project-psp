"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
export type MyStringType = 'admin' | 'user';

interface NewContextType {
    state: MyStringType;
    setState: React.Dispatch<React.SetStateAction<MyStringType>>;
}

const NewContext = createContext<NewContextType | undefined>(undefined);

export const NewContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const role = localStorage.getItem('role') ?? 'admin'
    const [state, setState] = useState<MyStringType>(role as MyStringType );

    return (
        <NewContext.Provider value={{ state, setState }}>
            {children}
        </NewContext.Provider>
    );
};

export const useNewContext = (): NewContextType => {
    const context = useContext(NewContext);
    if (!context) {
        throw new Error("useMyContext must be used within a NewContextProvider");
    }
    return context;
};  