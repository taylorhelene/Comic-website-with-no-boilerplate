import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import Comics from "./comics";
import Layout from "./Layout";
import Games from "./games";
const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage />} />
                <Route path="comics" element={<Comics/>} />
                <Route path="games" element={<Games/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App