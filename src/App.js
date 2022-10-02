import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//********components
import VendorsList from "./components/pages/VendorsList";
import Landing from "./components/pages/Landing";

//********styles

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<VendorsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
