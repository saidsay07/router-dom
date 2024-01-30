import React from "react";

import {Outlet} from "react-router-dom";
import CustomLink from "./ui/CustomLink.jsx";

function Layout() {
    return (
        <>
            <header>
                {/*<NavLink to="/">Home</NavLink>*/}
                {/*<NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">About</NavLink>*/}
                {/*<NavLink style={({isActive}) => ({color: isActive ? "#0F7DC6FF" : ""})} to="/blog">Blog</NavLink>*/}
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
            </header>

            <Outlet/>
        </>
    );
}

export default Layout;
