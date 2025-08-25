import React from "react";
import Header from "./Header";

export default function Layout({ Children }) {
  return (
    <div className="px-4 py-6">
      <Header />
    </div>
  );
}
