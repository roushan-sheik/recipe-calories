import React from "react";
import Banner from "./components/banner/Banner";
import Layout from "./components/layout/Layout";
import Recipes from "./components/recipes/Recipes";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch("recipes.json");
      fetch("recipes.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Layout>
      <Banner />
      <Recipes />
    </Layout>
  );
};

export default App;
