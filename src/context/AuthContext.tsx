/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

const Context = createContext<any>(({ user: false, setUser: () => ({}) }));

export const StateContext = ({ children }: { children: React.ReactNode }) => {

    const [userId, setUserId] = useState(0);

    return (
        <div>
            <Context.Provider value={{ userId, setUserId }}>
                {children}
            </Context.Provider>
        </div>
    );
};
//function to export context

export const useStateContext = () => useContext(Context);