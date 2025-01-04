import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="bg-gray-800">
      <Navbar></Navbar>
      <div className="min-h-[90vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
