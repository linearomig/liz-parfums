import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);