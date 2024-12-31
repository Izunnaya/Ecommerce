import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div>
      <h1 className="w-full text-center py-11 text-3xl font-extrabold capitalize">
        CATEGORIES
      </h1>

      <div className="max-w-[1250px] mx-auto my-7 md:my-8 md:flex items-center px-5 md:px-0 space-y-6 md:space-y-0 md:justify-between md:space-x-6 ">
        <CategoryCard
          title="Women"
          instock="instock"
          Imgsrc="/women.png"
          width={250}
          height={250}
        />
        <CategoryCard
          title="Men"
          instock="instock"
          Imgsrc="/joggers.png"
          width={250}
          height={250}
        />
        <CategoryCard
          title="Accessories"
          instock="instock"
          Imgsrc="/buckethat.png"
          width="250"
          height="250"
        />
      </div>
    </div>
  );
};

export default Categories;
