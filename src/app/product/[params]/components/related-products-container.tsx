/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { getProductsByCategoryIDAndBrandID } from "@/app/products/actions/getProductsAction";
import ProductCard from "@/components/product-card";
import React from "react";

interface RelatedProductsContainerProps {
  brand: string;
  category: string;
}

async function RelatedProductsContainer({
  brand,
  category,
}: RelatedProductsContainerProps) {
  const data = await getProductsByCategoryIDAndBrandID({
    categoryID: category,
    brandID: brand,
  });

  return (
    <div className="md:px-10">
      <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center">
        {data &&
          data.map((product: any, idx: number) => (
            <ProductCard key={idx} {...product} />
          ))}
      </div>
    </div>
  );
}

export default RelatedProductsContainer;
