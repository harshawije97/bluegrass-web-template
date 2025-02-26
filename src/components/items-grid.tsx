import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const appleItems = [
  {
    img: "https://i.ibb.co/4ZBZ6PXJ/iphone-cover.png",
    name: "iPhone",
    link: "/products?category=mobile&brand=apple",
  },
  {
    img: "https://i.ibb.co/CxXSGxh/ipad-cover.jpg",
    name: "iPad",
    link: "/products?category=tablets&brand=apple",
  },
  {
    img: "https://i.ibb.co/hxpTPjLw/apple-watch-cover.jpg",
    name: "iWatch",
    link: "/products?category=watches&brand=apple",
  },
  {
    img: "https://i.ibb.co/5gRhQ9pv/macbook-pro-cover.jpg",
    name: "Macbook",
    link: "/products?category=laptops&brand=apple",
  },
  {
    img: "https://i.ibb.co/tPHcFNM9/airpods-cover.png",
    name: "Airpods",
    link: "/products?category=headsets&brand=apple",
  },
  {
    img: "https://i.ibb.co/DfDf8xkf/apple-view-all.png",
    name: "View All",
    link: "/products",
  },
];

export function ItemsGridApple() {
  return (
    <>
      {/* mobile */}
      <div className="min-w-full md:hidden h-auto flex flex-wrap justify-start items-center gap-4 py-8 px-6">
        {appleItems.map((item, index) => (
          <div
            className="w-[145px] h-[170px] flex flex-col items-center justify-center rounded-lg bg-white/20 relative overflow-hidden"
            key={index}
          >
            <div className="absolute inset-0 flex justify-center items-center z-50">
              <h2 className="text-xl font-medium text-white">{item.name}</h2>
            </div>
            <Image
              src={item.img}
              alt="logo"
              width={1068}
              height={696}
              className="object-cover w-[152px] h-[172px] rounded-lg opacity-55"
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
      {/* desktop */}
      <div className="hidden w-full md:grid md:grid-cols-2 grid-cols-1 gap-4 px-6">
        <div className="w-full flex rounded-md relative">
          <Image
            src="https://i.ibb.co/vs9Hk07/iphone-15.jpg"
            alt="logo"
            width={800}
            height={800}
            className="object-cover w-full md:h-full h-[300px] rounded-lg"
          />
          <div className="absolute top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2">
            <span className="w-full flex flex-col gap-y-2 md:justify-center md:items-center mx-5">
              <h2 className="text-white text-sm">iPhone</h2>
              <h1 className="text-base md:text-2xl text-white mb-1">
                Browse for iPhone models
              </h1>
              <Link href={"#"} className="text-white text-sm md:text-base">
                Browse all
              </Link>
            </span>
          </div>
        </div>
        <div>
          <div className="w-full flex rounded-md relative">
            <Image
              src="https://i.ibb.co/pRQqm2q/ipad-2.jpg"
              alt="logo"
              width={800}
              height={800}
              className="md:object-contain object-cover w-full md:h-full h-[300px] rounded-lg"
            />
            <div className="absolute top-12 md:top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2 text-black">
              <span className="w-full flex flex-col gap-y-1 md:justify-center md:items-center mx-5">
                <h1 className="text-base md:text-2xl mb-0">
                  Explore our iPad range
                </h1>
                <Link href={"#"} className="text-sm md:text-base">
                  Browse all
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex rounded-md relative">
            <Image
              src="https://i.ibb.co/0mGCCVt/iwatch-10.jpg"
              alt="logo"
              width={800}
              height={800}
              className="md:object-cover object-cover w-full md:h-[500px] h-[300px] rounded-lg"
            />
            <div className="absolute top-1/4 md:top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2 text-slate-700">
              <span className="w-full flex flex-col gap-y-1 md:justify-center md:items-center mx-5">
                <h1 className="text-base md:text-2xl">
                  Explore our iWatch range
                </h1>
                <Link href={"#"} className="text-sm md:text-base">
                  Browse all
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex rounded-md relative">
            <Image
              src="https://i.ibb.co/85gx3jN/airpods.webp"
              alt="logo"
              width={800}
              height={800}
              className="md:object-contain object-cover w-full md:h-full h-[300px] rounded-lg"
            />
            <div className="absolute top-12 md:top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2 text-white">
              <span className="w-full flex flex-col gap-y-1 md:justify-center md:items-center mx-5">
                <h2 className="text-white text-sm">AirPods</h2>
                <h1 className="text-base md:text-2xl">
                  Browse for more AirPods
                </h1>
                <Link href={"#"} className="text-sm md:text-base">
                  Browse all
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    img: "https://i.ibb.co/zh9gyzdk/samsung-phone.png",
    name: "Galaxy Mobile",
    link: "/products?category=mobile&brand=samsung",
  },
  {
    img: "https://i.ibb.co/d3RXQBD/samsung-tabs.png",
    name: "Galaxy Tabs",
    link: "/products?category=mobile&brand=samsung",
  },
  {
    img: "https://i.ibb.co/sp2r8ZFD/samsung-watch.png",
    name: "Galaxy Watch",
    link: "/products?category=mobile&brand=samsung",
  },
  {
    img: "https://i.ibb.co/Ndgc6Q91/buds-3.png",
    name: "Galaxy Buds",
    link: "/products?category=mobile&brand=samsung",
  },
  {
    img: "https://i.ibb.co/HDcSdfpV/view-all.png",
    name: "View All",
    link: "/products?category=mobile&brand=samsung",
  },
];

export function ItemsGridSamsung() {
  return (
    <>
      {/* mobile */}
      <div className="min-w-full md:hidden h-auto flex flex-wrap justify-start items-center gap-4 py-8 px-6">
        {items.map((item, index) => (
          <div
            className="w-[145px] h-[170px] flex flex-col items-center justify-center rounded-lg bg-white/20 relative overflow-hidden"
            key={index}
          >
            <div className="absolute inset-0 flex justify-center items-center z-50">
              <h2 className="text-xl font-medium text-white">{item.name}</h2>
            </div>
            <Image
              src={item.img}
              alt="logo"
              width={1068}
              height={696}
              className="object-cover w-[152px] h-[172px] rounded-lg opacity-55"
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
      {/* desktop */}
      <div className="hidden w-full md:grid md:grid-cols-2 grid-cols-1 gap-4 px-6">
        <div className="w-full flex rounded-md relative">
          <Image
            src="https://i.ibb.co/ngcq9kx/samsung-template-img.jpg"
            alt="logo"
            width={800}
            height={800}
            className="object-cover w-full md:h-[590px] h-[300px] rounded-lg"
          />
          <div className="absolute top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2">
            <span className="w-full flex flex-col gap-y-2 md:justify-center md:items-center mx-5">
              <h2 className="text-white text-sm">iPhone</h2>
              <h1 className="text-base md:text-2xl text-white mb-1">
                Browse for iPhone models
              </h1>
              <Link href={"#"} className="text-white text-sm md:text-base">
                Browse all
              </Link>
            </span>
          </div>
        </div>
        <div>
          <div className="w-full flex rounded-md relative">
            <div className="absolute top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2">
              <span className="w-full flex flex-col gap-y-2 md:justify-center md:items-center mx-5">
                <h2 className="text-white text-sm">iPhone</h2>
                <h1 className="text-base md:text-2xl text-white mb-1">
                  Browse for iPhone models
                </h1>
                <Link href={"#"} className="text-white text-sm md:text-base">
                  Browse all
                </Link>
              </span>
            </div>
            <Image
              src="https://i.ibb.co/mvTSkVv/galaxy-tab.jpg"
              alt="logo"
              width={800}
              height={800}
              className="md:object-contain object-cover w-full md:h-[590px] h-[300px] rounded-lg bg-black"
            />
          </div>
        </div>
        <div>
          <div className="w-full flex rounded-md relative">
            <Image
              src="https://i.ibb.co/x21Q2rG/buds-3pro.webp"
              alt="logo"
              width={800}
              height={800}
              className="md:object-cover object-cover w-full md:h-[590px] h-[300px] rounded-lg"
            />
            <div className="absolute top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2">
              <span className="w-full flex flex-col gap-y-2 md:justify-center md:items-center mx-5">
                <h2 className="text-white text-sm">iPhone</h2>
                <h1 className="text-base md:text-2xl text-white mb-1">
                  Browse for iPhone models
                </h1>
                <Link href={"#"} className="text-white text-sm md:text-base">
                  Browse all
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex rounded-md relative">
            <Image
              src="https://i.ibb.co/ZTX0pvB/galaxy-watch.jpg"
              alt="logo"
              width={800}
              height={800}
              className="md:object-cover object-cover w-full md:h-[590px] h-[300px] rounded-lg"
            />
            <div className="absolute top-12 md:top-1/4 md:left-1/2 left-1/3 transform -translate-x-1/2 md:-translate-y-20 -translate-y-1/2 text-black">
              <span className="w-full flex flex-col gap-y-1 md:justify-center md:items-center mx-5">
                <h2 className="text-black text-sm">Galaxy Watch</h2>
                <h1 className="text-base md:text-2xl">
                  Browse for more AirPods
                </h1>
                <Link href={"#"} className="text-sm md:text-base">
                  Browse all
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
