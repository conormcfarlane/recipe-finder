import React from "react";
import iconBulletPoint from "/images/icon-bullet-point.svg"

export default function AboutReuseableList({ title, items }) {
  return (
    <section className="py-12 lg:flex mb-4 lg:gap-7">
      <p className="text-4xl mb-10 md:text-5xl lg:w-2/5">{title}</p>
      <ul className="flex flex-col gap-4 pl-4 lg:flex-1">
        {items.map((item, index) => (
          <li key={item.miniTitle}>
            <div className="flex items-center gap-2">
              <img src={iconBulletPoint} alt="" className="w-6 " />
               <p className="text-2xl font-bold ">{item.miniTitle}</p>
            </div>
           
            <p className="pl-8">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
