import React from "react";

export default function AboutReuseableList({ title, items }) {
  return (
    <section className="py-12">
      <p className="text-4xl mb-10">{title}</p>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={item}>
            <p className="text-2xl font-bold mb-3">{item.miniTitle}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
