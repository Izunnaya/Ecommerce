import React from "react";
import Image from "next/image";

const CategoryCard = ({ title, instock, Imgsrc, width, height }) => {
  return (
    <>
      <a className="border px-4 pt-4 flex justify-between items-start shadow-lg rounded-md cursor-pointer hover:bg-black/20 duration-700">
        <div className="">
          <h5 className="text-2xl font-extrabold pt-3">{title}</h5>
          <p className="text-sm mt-1 font-semibold">{instock}</p>
        </div>

        <Image
          alt="women jpeg"
          src={Imgsrc}
          width={250}
          height={250}
          className="object-contain"
        />
      </a>
    </>
  );
};

export default CategoryCard;
