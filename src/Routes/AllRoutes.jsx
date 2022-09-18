import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../components/Home/Profile";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </>
  );
}
