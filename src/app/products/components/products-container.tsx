/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import BreadcrumbNav from "./breadcrumb-nav";
import ProductCard from "@/components/product-card";
import getProductsAction, {
  getFilteredProductsAction,
} from "../actions/getProductsAction";
import { Button } from "@/components/ui/button";

function ProductsContainer() {
  // products & brand states
  const [category, setCategory] = React.useState<string | null>(null);
  const [brand, setBrand] = React.useState<string | null>(null);
  const [products, setProducts] = React.useState<any>([]);
  const [take, setTake] = React.useState<number>(10);
  const [skip, setSkip] = React.useState<number>(0);

  const searchParams = useSearchParams();

  // The callback to spot the change from category & brand
  const onFetch = React.useCallback(() => {
    if (category || brand) {

      const data = getFilteredProductsAction({
        category: category!,
        brand: brand!,
        take: take,
        skip: skip,
      });
      data.then((data) => setProducts(data));
    } else {
      console.log("Changed");
      const data = getProductsAction(take, skip);
      data.then((data) => setProducts(data));
    }
  }, [category, brand, take, skip]);

  React.useEffect(() => {
    setCategory(searchParams.get("category") || null);
    setBrand(searchParams.get("brand") || null);

    onFetch();
  }, [searchParams, onFetch]);

  const onChangePagination = () => {
    setTake(take + 10);
  };

  return (
    <div className="w-full h-full">
      <div className="container mx-auto 2xl:px-36 md:px-6 px-2">
        <BreadcrumbNav category={category || "all"} brand={brand!} />
        <div className="flex flex-col w-full py-6 min-h-svh md:min-h-[calc(100vh-180px)]">
          <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-x-2 gap-y-2 justify-items-center">
            {products ? (
              products.map((product: any) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <p className="text-base font-semibold animate-pulse">
                Loading...
              </p>
            )}
          </div>
          <div className="w-full h-auto flex justify-center items-center mt-12">
            <Button
              className="py-5 px-6 rounded-2xl w-[200px] flex justify-center items-center bg-[#0000000D] hover:bg-[#0000001A] text-slate-700 font-semibold text-sm capitalize"
              size={"lg"}
              onClick={onChangePagination}
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsContainer;
