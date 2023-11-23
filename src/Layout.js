import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return (
        <>
         <Outlet />
        </>
    )
}

export default Layout;