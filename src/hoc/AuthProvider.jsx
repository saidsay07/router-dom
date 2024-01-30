import React, {createContext, useState} from "react";

export const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function signIn(newUser, cb) {
        setUser(newUser);
        cb();
    }

    function signOut(cb) {
        setUser(null);
        cb();
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
