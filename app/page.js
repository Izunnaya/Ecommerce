import React from "react";

import { Herobanner, Categories, ProductCard, Footer } from "./components";

const HomePage = () => {
  return (
    <div>
      <Herobanner />
      <Categories />
      <div>
        <h1 className="text-4xl">Product Overview </h1>
        <ProductCard />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
