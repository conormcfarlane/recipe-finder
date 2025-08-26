import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="px-4 py-6">
      <Header />
      {children}
    </div>
  );
}
