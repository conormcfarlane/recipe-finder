import React from "react";
import { useState } from "react";

export default function RecipePrepFilter({
  prepFilter,
  setPrepFilter,
  options,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white p-2 w-full flex flex-col items-center">
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        Max Prep Time
      </button>
      {open && (
        <div className="">
          {options.map((option) => (
            <label className="flex items-center gap-1 w-fit">
              <input
                type="radio"
                name="preptime"
                value={option}
                checked={prepFilter === option}
                onChange={() => setPrepFilter(option)}
                className="hidden"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition cursor-pointer
                  ${
                    prepFilter === option
                      ? "border-blue-900"
                      : "border-gray-400"
                  }`}
              >
                {prepFilter === option && (
                  <div className="w-2.5 h-2.5 bg-green-900 rounded-full" />
                )}
              </div>
              <span>{option} Minutes</span>
            </label>
          ))}
          <span className="cursor-pointer" onClick={() => setPrepFilter(null)}>
            Clear
          </span>
        </div>
      )}
    </div>
  );
}
