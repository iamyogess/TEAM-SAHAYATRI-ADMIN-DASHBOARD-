import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import GuideVerificationRequest from "./pages/admin/GuideVerificationRequest";
import VerifiedGuides from "./pages/admin/VerifiedGuides";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Admins from "./pages/admin/Admins";
import Login from "../src/pages/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/guide-verification-request"
                element={<GuideVerificationRequest />}
              />
              <Route path="/verified-guides" element={<VerifiedGuides />} />
              <Route path="/users" element={<Users />} />
              <Route path="/admins" element={<Admins />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
