import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CV } from "./pages/CV";
import { NoPage } from "./pages/NoPage";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cv" element={<CV />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};
