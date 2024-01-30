import React from "react";

import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth.jsx";

function RequireAuth({children}) {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    return children;
}

export default RequireAuth;
