import React from "react";
import AboutReuseableList from "./AboutReuseableList";
export default function AboutOurFoodPhilosophy() {
  const OurFoodPhilosophyItems = [
    {
      miniTitle: "Whole ingrediants first",
      description:
        "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
    },
    {
      miniTitle: "Flavour without compromise",
      description:
        "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
    },
    {
      miniTitle: "Respect for time",
      description:
        "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
    },
    {
      miniTitle: "Sustainable choices",
      description:
        "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
    },
  ];
  return (
    <section>
      <AboutReuseableList
        title={"Our Food philosophy"}
        items={OurFoodPhilosophyItems}
      />
    </section>
  );
}
