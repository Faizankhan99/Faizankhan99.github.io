import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/AboutMe/About";
import Profile from "../components/Home/Profile";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
