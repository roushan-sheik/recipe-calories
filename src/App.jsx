import React from "react";
import Banner from "./components/banner/Banner";
import Layout from "./components/layout/Layout";
import Recipes from "./components/recipes/Recipes";

const App = () => {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch("recipes.json")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="">
      <Layout>
        <Banner />
        <Recipes recipes={recipes} />
      </Layout>
    </div>
  );
};

export default App;
