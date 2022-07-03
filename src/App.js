import React, { useEffect, useState } from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SharedLayout from "./pages/SharedLayout";
import Requests from "./pages/Requests";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/requests"
              element={
                <ProtectedRoute>
                  <Requests />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Applications"
              element={
                <ProtectedRoute>
                  <Applications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="Login" element={<Login  />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
