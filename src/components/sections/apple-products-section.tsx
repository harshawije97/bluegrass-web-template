/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Button } from "../ui/button";
import { appleProductRoutes } from "@/shared/routes/index-routes";
import ProductCard from "../product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import SectionButton from "../section-button";

function AppleProductsSection() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    appleProductRoutes[0].onFetch(appleProductRoutes[0].slug).then((data) => {
      if (data.status === 200) setData(data.data);
    });
  }, []);

  const activeProducts = (route: any) => {
    setData(null);

    const products = route.onFetch(route.slug);
    products.then((data: any) => setData(data.data));
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-4 py-8 md:px-6">
      <div className="container mx-auto md:px-16 2xl:px-32 px-4">
        <header className="flex flex-col justify-center items-center gap-y-2 w-full pb-4">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl md:font-semibold text-center w-full">
            Apple.
          </h2>
          <p className="text-sm md:text-lg 2xl:text-xl text-slate-500">
            Shop Apple products and pick what best for you
          </p>
        </header>
        <div className="md:hidden flex flex-col w-full h-full gap-y-4">
          {/* mobile scrollbar */}
          <div className="min-w-full flex flex-wrap gap-4 justify-center items-center py-8">
            {appleProductRoutes.map((route) => (
              <Button
                key={route.id}
                onClick={() => activeProducts(route)}
                className="bg-white py-5 text-sm text-black rounded-lg ring-1 ring-slate-500 shadow-none hover:ring-blue-500 hover:bg-white hover:text-blue-500"
              >
                <Image
                  src={route.link}
                  alt={route.name}
                  width={20}
                  height={20}
                  loading="eager"
                />
                {route.name}
              </Button>
            ))}
          </div>
          <section className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center">
            {data &&
              data.map((product: any, idx: number) => (
                <ProductCard key={idx} {...product} />
              ))}
          </section>
        </div>
        <div className="hidden md:flex flex-col w-full h-full gap-y-4">
          <Tabs defaultValue="iphone" className="w-full">
            <TabsList className="flex justify-center">
              {appleProductRoutes.map((route) => (
                <TabsTrigger
                  key={route.id}
                  value={route.slug}
                  onClick={() => activeProducts(route)}
                >
                  {route.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {appleProductRoutes.map((route) => (
              <TabsContent key={route.id} value={route.slug}>
                <section className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center py-8">
                  {data &&
                    data.map((product: any, idx: number) => (
                      <ProductCard key={idx} {...product} />
                    ))}
                </section>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="w-full flex justify-center items-center py-8">
          <SectionButton link="products?category=mobile&brand=apple" />
        </div>
      </div>
    </div>
  );
}

export default AppleProductsSection;
