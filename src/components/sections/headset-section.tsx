/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Button } from "../ui/button";
import ProductCard from "../product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { headsetProductRoutes } from "@/shared/routes/index-routes";
import Image from "next/image";
import SectionButton from "../section-button";
import { URLS } from "@/shared/routes/products-routes";

const headsetItems = [
  {
    img: "https://i.ibb.co/qYyYH8Mh/headphones.png",
    name: "Headphones",
    link: "/products?category=mobile&brand=apple",
  },
  {
    img: "https://i.ibb.co/TBnWXhLr/earbuds.png",
    name: "Earbuds",
    link: "/products?category=tablets&brand=apple",
  },
];

function HeadsetSection() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    headsetProductRoutes[0]
      .onFetch(headsetProductRoutes[0].slug)
      .then((data) => data.status === 200 && setData(data.data));
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-4 py-8 md:px-6">
      <div className="container mx-auto md:px-16 2xl:px-32 px-4">
        <header className="flex flex-col justify-center items-center gap-y-2 w-full pb-4">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl md:font-semibold text-center w-full">
            Headphones.
          </h2>
          <p className="text-sm md:text-lg 2xl:text-xl text-slate-500">
            Shop headphones to choose your best one
          </p>
        </header>
        <div className="md:hidden flex flex-col w-full h-full gap-y-4">
          {/* Mobile section */}
          <div className="w-full flex justify-center items-center gap-x-8 py-2">
            <Image
              src={"/icons/badge-icon/jbl-path.svg"}
              alt="icon"
              width={50}
              height={50}
              className=""
            />
            <Image
              src={"/icons/badge-icon/soundcore.svg"}
              alt="icon"
              width={80}
              height={50}
              className=""
            />
          </div>
          <div className="min-w-full md:hidden h-auto flex flex-row justify-center items-center gap-4 py-8">
            {headsetItems.map((item, index) => (
              <div
                className="min-w-[158px] h-[258px] flex flex-col items-center justify-center rounded-xl bg-black/70 relative overflow-hidden"
                key={index}
              >
                <div className="absolute inset-0 flex justify-center items-center z-50">
                  <h2 className="text-xl font-medium text-white">
                    {item.name}
                  </h2>
                </div>
                <Image
                  src={item.img}
                  alt="logo"
                  width={1605}
                  height={1605}
                  className="object-cover w-[158px] h-[258px] rounded-lg opacity-55 bg-white"
                />
                <div className="absolute inset-0 flex justify-end items-end z-50">
                  <a href={item.link} className="mb-2 mr-2">
                    <Button
                      type="button"
                      variant={"default"}
                      size={"sm"}
                      className="rounded-full bg-[#4E56F5]"
                    >
                      See more
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <section className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center">
            {data &&
              data.map((product: any, idx: number) => (
                <ProductCard key={idx} {...product} />
              ))}
          </section> */}
        </div>
        <div className="hidden md:flex flex-col w-full h-full gap-y-4">
          <Tabs defaultValue="headphones" className="w-full">
            <TabsList className="flex justify-center">
              {headsetProductRoutes.map((route) => (
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
            {headsetProductRoutes.map((route) => (
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
        <div className="mt-3 w-full flex justify-center items-center">
          <SectionButton link={URLS.headsets} />
        </div>
      </div>
    </div>
  );
}

export default HeadsetSection;
