import React from "react";

import {useAuth} from "../hook/useAuth.jsx";
import {useNavigate} from "react-router-dom";

function CreatePage() {
    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Create page</h1>
            <button
                onClick={() =>
                    auth.signOut(() => navigate("/blog/new", {replace: true}))
                }
            >
                sign out
            </button>
        </div>
    );
}

export default CreatePage;
