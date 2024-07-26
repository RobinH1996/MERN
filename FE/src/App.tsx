import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className=" overflow-y-auto overflow-x-hidden">
      <Routes>
        <Route path={""} element={<LandingPage />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"signup"} element={<Signup />} />
        <Route path={"dashboard"} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
