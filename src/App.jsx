import React from "react";
import Banner from "./components/banner/Banner";
import Layout from "./components/layout/Layout";
import Recipes from "./components/recipes/Recipes";

const App = () => {
  return (
    <Layout>
      <Banner />
      <Recipes />
    </Layout>
  );
};

export default App;
