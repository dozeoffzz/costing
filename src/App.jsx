import React from "react";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
