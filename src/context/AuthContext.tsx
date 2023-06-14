import React, { createContext, useContext, useState } from "react";

interface StateContextProps {
user: boolean;
setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<StateContextProps | undefined>(undefined);

export const StateContext: React.FC = ({ children }) => {
const [user, setUser] = useState(false);

return (
	<Context.Provider value={{ user, setUser }}>
	{children}
	</Context.Provider>
);
};

export const useStateContext = () => useContext(Context);