import React from "react";
import AboutReuseableList from "./AboutReuseableList";
export default function AboutWhyWeExist() {
  const WhyWeExistListItems = [
    {
      miniTitle: "Cut through the noise",
      description:
        "the internet is bursting with recipes, yet most busy cooks still default to take-aways or packageded foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
    },
    {
      miniTitle: "Empower home kitches",
      description:
        "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
    },
    {
      miniTitle: "Make healthy look good",
      description:
        "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
    },
  ];
  return (
    <section>
      <AboutReuseableList title={"Why we exist"} items={WhyWeExistListItems} />
    </section>
  );
}
