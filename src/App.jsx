import { Children } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Recipes from "./pages/Recipes/Recipes";
import RecipeInstructions from "./pages/Recipes/RecipeInstructions";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeInstructions />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
