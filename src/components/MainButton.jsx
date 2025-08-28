import React from "react";

export default function MainButton({ text, ...props }) {
  return (
    <button
      className="bg-green-900 text-white py-3 rounded-xl cursor-pointer w-full"
      {...props}
    >
      {text}
    </button>
  );
}
