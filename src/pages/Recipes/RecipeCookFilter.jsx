import React from "react";
import { useState } from "react";

export default function RecipeCookFilter({
  cookFilter,
  setCookFilter,
  options,
  icon,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white p-2 w-full flex flex-col rounded-xl border-1 border-gray-300 ">
      <div
        className="flex items-center justify-center gap-2 w-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p>Max Cook Time</p>
        <img src={icon} alt="" className="w-fit" />
      </div>

      {open && (
        <div>
          {options.map((option) => (
            <label className="flex gap-1 w-fit cursor-pointer p-2">
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
          <span
            className="cursor-pointer px-2"
            onClick={(() => setCookFilter(null), () => setOpen(!open))}
          >
            Clear
          </span>
        </div>
      )}
    </div>
  );
}
