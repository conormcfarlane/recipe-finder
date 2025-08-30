import React from "react";
import { Link } from "react-router-dom";

export default function MainButton({ text, ...props }) {
  return (
    <Link to={"/recipes"}>
      <button
        className="bg-green-900 text-white py-3 px-4 rounded-xl cursor-pointer w-full"
        {...props}
      >
        {text}
      </button>
    </Link>
  );
}
