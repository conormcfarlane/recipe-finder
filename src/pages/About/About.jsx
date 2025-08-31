import React from "react";
import AboutHero from "./AboutHero";
import AboutWhyWeExist from "./AboutWhyWeExist";
import AboutOurFoodPhilosophy from "./AboutOurFoodPhilosophy";
import ReadyToCook from "../../components/ReadyToCook";
export default function About() {
  return (
    <section>
      <AboutHero />
      <AboutWhyWeExist />
      <AboutOurFoodPhilosophy />
      <ReadyToCook />
    </section>
  );
}
