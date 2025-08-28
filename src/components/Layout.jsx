import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="px-4 py-6 bg-neutral-100 md:px-8 lg:px-31">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
