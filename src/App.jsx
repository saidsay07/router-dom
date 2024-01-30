import React from "react";
import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import NotfoundPage from "./pages/NotfoundPage.jsx";
import Layout from "./components/Layout.jsx";
import SinglePage from "./pages/SinglePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import EditPage from "./pages/EditPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RequireAuth from "./hoc/RequireAuth.jsx";
import {AuthProvider} from "./hoc/AuthProvider.jsx";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    {/*<Route path="about/*" element={<AboutPage/>}>*/}
                    {/*    <Route path="contacts" element={<p>contacts</p>}/>*/}
                    {/*    <Route path="team" element={<p>team</p>}/>*/}
                    {/*    <Route path="products" element={<p>products</p>}/>*/}
                    {/*</Route>*/}
                    <Route path="about" element={<AboutPage/>}>
                        <Route path="contacts" element={<p>Our contact</p>}/>
                        <Route path="team" element={<p>Our team</p>}/>
                        <Route path="products" element={<p>products</p>}/>
                    </Route>
                    <Route path="about-us" element={<Navigate to="/about" replace/>}/>
                    <Route path="blog" element={<BlogPage/>}/>
                    <Route path="blog/:id" element={<SinglePage/>}/>
                    <Route path="blog/:id/edit" element={<EditPage/>}/>
                    <Route
                        path="blog/new"
                        element={
                            <RequireAuth>
                                <CreatePage/>
                            </RequireAuth>
                        }
                    />
                    <Route path="login" element={<LoginPage/>}/>
                </Route>
                <Route path="*" element={<NotfoundPage/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default App;
