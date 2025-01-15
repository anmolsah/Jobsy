import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/Header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="text-center text-xl font-serif py-4 rounded-md shadow-lg text-cyan-400">
        Made with <span className="text-pink-500">💖</span> by Anmol
      </div>
    </div>
  );
};

export default AppLayout;
