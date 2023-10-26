import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Developer from "./pages/Developer";
import Secutiry from "./pages/Security";
import Database from "./pages/Database";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/security" element={<Secutiry />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </BrowserRouter>
  );
}
