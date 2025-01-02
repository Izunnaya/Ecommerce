import React from "react";

import { Herobanner, Categories, ProductCard, Footer } from "./components";

import { client } from "./lib/client";
const HomePage = ({ products }) => {
  return (
    <div className="bg-slate-200 h-screen w-full text-black absolute top-0 left-0">
      <Herobanner />
      <Categories />
      <div>
        <h1 className="text-4xl">Product Overview </h1>
        <ProductCard products={products} />
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  //create a query for sanity
  const query = '*[_type == "product"]';

  const products = await client.fetch(query);
  return {
    props: { products },
  };
};
export default HomePage;
