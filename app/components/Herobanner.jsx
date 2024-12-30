import Image from "next/image";
import React from "react";

const Herobanner = () => {
  return (
    <section>
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src="/banner.jpg"
          alt="banner image"
          quality={100}
          width={400}
          height={400}
          className="object-cover h-screen w-full"
        />
      </div>

      <div className="relative h-screen w-full bg-slate-900/30 md:bg-slate-900/50"></div>

      <div className="absolute top-[50%] w-full text-center">
        <h1 className="md:text-5xl mx-2 md:mx-0 text-3xl text-white font-extrabold uppercase">
          all collections in stock
        </h1>
        <button className="shopnow__button">Shop Now</button>
      </div>
    </section>
  );
};

export default Herobanner;
