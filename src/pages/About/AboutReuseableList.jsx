import React from "react";

export default function AboutReuseableList({ title, items }) {
  return (
    <section className="py-12 lg:flex mb-4 lg:gap-7">
      <p className="text-4xl mb-10 md:text-5xl lg:w-2/5">{title}</p>
      <ul className="flex flex-col gap-4 list-disc pl-4 lg:flex-1">
        {items.map((item, index) => (
          <li key={item.miniTitle}>
            <p className="text-2xl font-bold mb-3 ">{item.miniTitle}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
