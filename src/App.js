import React, { useEffect, useState } from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SharedLayout from "./pages/SharedLayout";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
