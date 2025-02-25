/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";
import { useQueryState } from "nuqs";
import productPageRoutes from "@/shared/routes/products-routes";

function ProductsNavigation({ category }: any) {
  const [categoryValue, setCategoryValue] = React.useState<any>(null);
  const [brand, setBrand] = useQueryState("brand", { defaultValue: "" });

  React.useEffect(() => {
    const categoryValue = productPageRoutes.find(
      (item) => item.category === category
    );
    setCategoryValue(categoryValue);
  }, [category]);

  return (
    <div className="w-full h-full">
      {/* mobile navbar */}
      <div className="px-6 md:hidden">
        <ScrollArea className="w-[320px] whitespace-nowrap">
          <div className="flex w-max space-x-16 p-4 gap-x-6">
            {categoryValue?.values.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 justify-center items-center cursor-pointer"
                onClick={() => setBrand(item.slug)}
              >
                <Image
                  src={item.logo}
                  alt={item.slug}
                  width={980}
                  height={980}
                  className="object-contain w-full h-[35px]"
                  priority
                />
                <p className="text-xs text-slate-500">{item.name}</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {/* desktop navbar */}
      <div className="hidden md:flex items-center w-full  min-h-24 bg-slate-50/50 mt-14 py-4 px-6">
        <div className="flex items-center justify-center w-full h-full gap-x-24">
          {categoryValue?.values.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 justify-center items-center cursor-pointer"
              onClick={() => setBrand(item.slug)}
            >
              <Image
                src={item.logo}
                alt={item.slug}
                width={980}
                height={980}
                className="object-contain w-full h-[40px]"
                priority
              />
              {/* <p className="text-xs">{item.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsNavigation;
