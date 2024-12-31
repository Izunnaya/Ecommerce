import React from "react";
import Image from "next/image";

const CategoryCard = ({ title, instock, Imgsrc }) => {
  return (
    <>
      <div className="border px-4 pt-4 flex w-full justify-between items-start shadow-lg rounded-md cursor-pointer hover:bg-black/20 duration-700 h-[300px]">
        <div className="">
          <h5 className="text-2xl font-extrabold pt-3">{title}</h5>
          <p className="text-sm mt-1 font-semibold">{instock}</p>
        </div>
        <div className="">
          <Image
            alt="women jpeg"
            src={Imgsrc}
            className="object-fill"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
