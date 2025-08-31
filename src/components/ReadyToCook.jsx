import React from "react";
import MainButton from "./MainButton";
import patternFork from "../assets/images/pattern-fork.svg";
import patternKnife from "../assets/images/pattern-knife.svg";
export default function ReadyToCook() {
  return (
    <section className="relative px-4 py-12 bg-neutral-200 flex flex-col text-center items-center gap-4 mt-18 rounded-xl md:gap-10 overflow-hidden md:py-20">
      <p className="text-[2.5rem] font-bold leading-[120%] z-10">
        Ready to cook smarter?
      </p>
      <p className="z-10">
        Hit the button, pick a recipe, and get dinner on the table--fast
      </p>
      <div className="w-1/2 md:w-1/4">
        <MainButton text="Browse recipes" />
      </div>
      <img
        src={patternFork}
        alt=""
        className="hidden md:block absolute bottom-0 left-0 h-4/6 -translate-x-10 translate-y-8"
      />
      <img
        src={patternKnife}
        alt=""
        className="hidden md:block absolute top-0 right-0 h-4/6 translate-x-12 -translate-y-18 z-1"
      />
    </section>
  );
}
