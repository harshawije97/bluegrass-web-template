/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { accessoriesProductRoutes } from "@/shared/routes/index-routes";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import ProductCard from "../product-card";
import Image from "next/image";
import { Card } from "../ui/card";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { URLS } from "@/shared/routes/products-routes";

function AccessoriesSection() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    accessoriesProductRoutes[0]
      .onFetch(accessoriesProductRoutes[0].slug)
      .then((data) => data.status === 200 && setData(data.data));
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-4 py-8 md:px-6">
      <div className="container mx-auto md:px-16 2xl:px-32">
        <header className="flex flex-col justify-center items-center gap-y-2 w-full pb-4 px-4">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl md:font-semibold text-center w-full">
            Accessories.
          </h2>
          <p className="text-sm md:text-lg 2xl:text-xl text-slate-500">
            Shop accessories to choose your best one
          </p>
        </header>
        <div className="md:hidden flex flex-col w-full h-full gap-y-4 py-6">
          {/* Mobile section */}
          <div className="w-full h-full">
            <Image
              alt="logo"
              src="/img/accessories.png"
              width={1000}
              height={1480}
              className="object-cover w-full h-[158px]"
              priority
            />
          </div>
          <div className="w-full h-full flex flex-col gap-4 px-8">
            <Card className="w-full h-[76px] bg-[#00000040] bg-img-keyboard">
              <div className="w-full h-full flex justify-between items-center px-4">
                <h2 className="text-white font-medium text-lg">
                  Keyboard & Mouse
                </h2>
                <a href={URLS.accessories}>
                  <Button className="bg-slate-700 rounded-full px-2.5">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Card>
            <Card className="w-full h-[76px] bg-[#00000040] bg-img-magsafe">
              <div className="w-full h-full flex justify-between items-center px-4">
                <h2 className="text-white font-medium text-lg">MagSafe</h2>
                <a href={URLS.accessories}>
                  <Button className="bg-slate-700 rounded-full px-2.5">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Card>
            <Card className="w-full h-[76px] bg-[#00000040] bg-img-homepod">
              <div className="w-full h-full flex justify-between items-center px-4">
                <h2 className="text-white font-medium text-lg">Home pod</h2>
                <a href={URLS.accessories}>
                  <Button className="bg-slate-700 rounded-full px-2.5">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div className="mt-3 w-full flex justify-center items-center">
            <a href={URLS.accessories} className="w-full flex justify-center items-center">
              <Button
                className="py-5 px-6 rounded-2xl w-[200px] flex justify-center items-center bg-[#0000000D] text-slate-700 font-semibold text-sm capitalize"
                size={"lg"}
              >
                Browse all
                <MoveUpRight className="h-4 w-4 ml-3" />
              </Button>
            </a>
          </div>
          {/* <section className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center">
            {data &&
              data.map((product: any, idx: number) => (
                <ProductCard key={idx} {...product} />
              ))}
          </section> */}
        </div>
        <div className="hidden md:flex flex-col w-full h-full gap-y-4">
          <Tabs defaultValue="mouse" className="w-full">
            <TabsList className="flex justify-center">
              {accessoriesProductRoutes.map((route) => (
                <TabsTrigger
                  key={route.id}
                  value={route.slug}
                  onClick={() =>
                    route.onFetch(route.slug).then((data) => setData(data.data))
                  }
                >
                  {route.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {accessoriesProductRoutes.map((route) => (
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
          <Link href={"#"}>
            <Button
              variant={"outline"}
              className="py-5 px-6 rounded-full bg-slate-50 font-medium capitalize"
            >
              See all
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccessoriesSection;
