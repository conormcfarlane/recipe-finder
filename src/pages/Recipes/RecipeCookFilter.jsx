import React from "react";
import { useState } from "react";

export default function RecipeCookFilter({
  cookFilter,
  setCookFilter,
  options,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        Max Cook Time
      </button>
      {open && (
        <div>
          {options.map((option) => (
            <label className="flex gap-1 w-fit cursor-pointer">
              <input
                type="radio"
                name="cookFilter"
                value={option}
                checked={option === cookFilter}
                onChange={() => setCookFilter(option)}
                className="hidden"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition cursor-pointer
                  ${
                    cookFilter === option
                      ? "border-blue-900"
                      : "border-gray-400"
                  }`}
              >
                {cookFilter === option && (
                  <div className="w-2.5 h-2.5 bg-green-900 rounded-full" />
                )}
              </div>
              <span>{option} Minutes</span>
            </label>
          ))}
          <span className="cursor-pointer" onClick={() => setCookFilter(null)}>
            Clear
          </span>
        </div>
      )}
    </div>
  );
}
