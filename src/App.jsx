import AdminSettings from "./pages/Admin-Setting";
import CRM from "./pages/CRM";
import Checkout from "./pages/Checkout";
import Indes from "./pages/indes";
import InventoryManagement from "./pages/Inventory";
import Maintenance from "./pages/Maintenance";
import Navbar from "./components/Sidebar";
import Order from "./pages/Order";
import POS from "./pages/POS";
import React from "react";
import Rooms from "./pages/Rooms";
import Security from "./pages/Security";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
  
      <div className="navbar-container">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/indes" element={<Indes />} />
            <Route path="/Rooms" element={<Rooms />} />
            <Route path="/Maintenance" element={<Maintenance />} />
            <Route path="/Security" element={<Security />} />
            <Route path="/Inventory" element={<InventoryManagement />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Admin-Setting" element={<AdminSettings />} />
            <Route path="/POS" element={<POS />} />
            <Route path="/CRM" element={<CRM />} />
          </Routes>
        </div>
      </div>
 
  );
};

export default App;
