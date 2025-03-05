import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/Register";
import ProfilePage from "../pages/nav/ProfilePage";
import PageNotFound from "../components/subComponents/PageNoteFound";
import MapPage from "../pages/MapPage"

const AppRouter = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<DashboardLayout><Home /></DashboardLayout>} />

          {/* Protected routes */}
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
         

          {/* Other routes */}
          <Route path="/map" element={<DashboardLayout> <MapPage /></DashboardLayout>} />
          <Route path="/faqs" element={<DashboardLayout></DashboardLayout>} />

                
          {/* 404 route */}
          <Route path="*" element={<DashboardLayout><div className="flex items-center justify-center min-h-screen"><PageNotFound /></div></DashboardLayout>} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
