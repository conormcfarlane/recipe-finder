import React from "react";
import { useState } from "react";

export default function RecipePrepFilter({
  prepFilter,
  setPrepFilter,
  options,
  icon,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white py-2 w-full flex flex-col rounded-xl border-1 border-gray-300">
      <div
        className="flex items-center justify-center gap-2 w-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p>Max Prep Time</p>
        <img src={icon} alt="" className="w-fit" />
      </div>

      {open && (
        <div className="">
          {options.map((option) => (
            <label className="flex gap-1 w-fit p-2">
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
          <span
            className="cursor-pointer px-2"
            onClick={(() => setPrepFilter(null), () => setOpen(!open))}
          >
            Clear
          </span>
        </div>
      )}
    </div>
  );
}
