import React from "react";
import {useParams} from "react-router-dom";

function EditPage() {
    const {id} = useParams();
    return (
        <div>
            <h1>Edit page {id}</h1>
        </div>
    );
}

export default EditPage;
