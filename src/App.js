import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./parts/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CV } from "./pages/CV";
import { NoPage } from "./pages/NoPage";
import { Footer } from "./parts/Footer";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cv" element={<CV />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}