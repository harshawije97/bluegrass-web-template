/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import ProductCard from "../product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { otherProductRoutes } from "@/shared/routes/index-routes";
import SectionButton from "../section-button";
import { URLS } from "@/shared/routes/products-routes";

function OtherProductsSection() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    otherProductRoutes[0]
      .onFetch(otherProductRoutes[0].slug)
      .then((data) => data.status === 200 && setData(data.data));
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-4 px-0 md:px-6">
        <header className="w-full md:flex flex-row justify-center items-center md:gap-x-12 px-6 gap-x-4 hidden">
          {/* Icons here */}
          <span>
            <Image
              alt="logo"
              src="/icons/honor.svg"
              width={130}
              height={130}
              className="w-[100px] h-[90px] md:w-[130px] md:h-[130px]"
            />
          </span>
          <span>
            <Image
              alt="logo"
              src="/icons/nokia.svg"
              width={130}
              height={130}
              className="w-[100px] h-[90px] md:w-[130px] md:h-[130px]"
            />
          </span>
          <span>
            <Image
              alt="logo"
              src="/icons/xiaomi.svg"
              width={130}
              height={130}
            />
          </span>
          <span>
            <Image
              alt="logo"
              src="/icons/zte-nubia.svg"
              width={130}
              height={130}
            />
          </span>
          <span>
            <Image
              alt="logo"
              src="/icons/oppo.svg"
              width={130}
              height={130}
              className="w-[100px] h-[90px] md:w-[130px] md:h-[130px]"
            />
          </span>
          <span>
            <Image alt="logo" src="/icons/tcl.svg" width={130} height={130} />
          </span>
        </header>
        <div className="container mx-auto md:px-16 2xl:px-32 px-4 pb-12">
          <header className="flex flex-col justify-center items-center gap-y-2 w-full pb-4">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl md:font-semibold text-center w-full">
              Other.
            </h2>
            <p className="text-sm md:text-lg 2xl:text-xl text-slate-500 text-center">
              Explore other brands and pick what best for you
            </p>
          </header>
          <div className="md:hidden flex flex-col w-full h-full gap-y-4">
            {/* mobile scrollbar */}
            <div className="min-w-full flex flex-wrap gap-4 justify-center items-center py-8">
              {otherProductRoutes.map((route) => (
                <Button
                  key={route.id}
                  onClick={() =>
                    route.onFetch(route.slug).then((data) => setData(data.data))
                  }
                  className="bg-white py-5 text-sm text-black rounded-lg ring-1 ring-slate-500 shadow-none hover:ring-blue-500 hover:bg-white hover:text-blue-500"
                >
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
            <div className="w-full flex justify-center items-center py-8">
              <SectionButton link="/products" />
            </div>
          </div>
          <div className="hidden md:flex flex-col w-full h-full gap-y-4 mb-8">
            <Tabs defaultValue="honor" className="w-full">
              <TabsList className="flex justify-center">
                {otherProductRoutes.map((route) => (
                  <TabsTrigger
                    key={route.id}
                    value={route.slug}
                    onClick={() =>
                      route
                        .onFetch(route.slug)
                        .then((data) => setData(data.data))
                    }
                  >
                    {route.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {otherProductRoutes.map((route) => (
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
          <div className="hidden w-full md:flex justify-center items-center py-8">
            <SectionButton link={URLS.mobile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProductsSection;
