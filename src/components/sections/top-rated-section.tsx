/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTopRatedProducts } from "@/api/products/get-products";
import React from "react";
import ProductCard from "../product-card";

async function TopRatedSection() {
  const { data } = await getTopRatedProducts("top-rated");

  return (
    <div className="w-full h-full flex flex-col gap-y-4 py-8 md:px-6">
      <div className="container mx-auto md:px-16 2xl:px-32 px-4">
        <header className="flex w-full justify-between items-center pb-8">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl md:font-semibold text-center">
            Top Rated.
          </h2>
        </header>
        <section className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center">
          {data.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default TopRatedSection;
