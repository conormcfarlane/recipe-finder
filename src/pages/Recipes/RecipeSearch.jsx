import React from "react";

export default function ({ searchTerm, setSearchTerm }) {
  return (
    <form className="w-full">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or ingredient..."
        className="bg-white p-2 w-full rounded-xl border-1 border-gray-300"
      />
    </form>
  );
}
