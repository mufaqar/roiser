"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/homebg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto text-white z-10 px-4">
        <p className="text-[40px] font-[300] uppercase tracking-widest">Ready Item</p>
        <h1 className="text-4xl md:text-7xl font-bold uppercase">Home Decor</h1>
        <p className="text-[20px] font-[300] uppercase tracking-widest mt-6">From $299.00</p>
        <button className="mt-6 border  px-6 py-3 font-bold uppercase">
          <Link href=''>Explore Items</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
