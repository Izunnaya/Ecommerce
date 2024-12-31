import React from "react";
import CategoryCard from "./CategoryCard";

const categoryStyle =
  "max-w-[1250px] mx-auto my-5 md:flex items-center px-5 md:px-0 space-y-6 md:space-y-0 md:justify-between md:space-x-6 w-full";
const Categories = () => {
  return (
    <div>
      <h1 className="w-full text-center py-8 text-3xl font-extrabold capitalize">
        CATEGORIES
      </h1>

      <div className={`${categoryStyle}`}>
        <CategoryCard title="Women" instock="instock" Imgsrc="/lady.png" />
        <CategoryCard title="Men" instock="instock" Imgsrc="/joggers.png" />
        <CategoryCard
          title="Accessories"
          instock="instock"
          Imgsrc="/buckethat.png"
        />
      </div>
    </div>
  );
};

export default Categories;
