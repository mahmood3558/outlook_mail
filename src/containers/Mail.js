import { Route, Routes } from "react-router";

import Header from "../components/header/header.jsx";
import Navbar from "../components/navbar/navbar";
import Home from "../components/page/Home";
import Reports from "../components/page/Reports";
import Products from "../components/page/Products";

function Mail() {
  // Route & Routes
  return (
    <div>
      <div className="fix">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default Mail;
