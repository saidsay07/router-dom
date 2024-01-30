import React from "react";

import {Link, Outlet} from "react-router-dom";

function AboutPage() {
    return (
        <>
            <h1>About page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                esse!
            </p>
            <ul>
                <li>
                    <Link to="contacts">contacts</Link>
                </li>
                <li>
                    <Link to="team">team</Link>
                </li>
                <li>
                    <Link to="products">products</Link>
                </li>
            </ul>

            <Outlet/>
        </>
    );
}

export default AboutPage;
