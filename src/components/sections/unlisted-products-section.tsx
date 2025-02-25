import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function UnlistedProductsSection() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto p-4 md:p-8">
        <header className="flex flex-col w-full justify-between items-center pb-8">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl md:font-semibold text-center">
            Explore.
          </h2>
          <p>Discover our products by unlisted categories</p>
        </header>
        <div className="pt-12 w-full h-full">
          {/* Unlisted section */}
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <section className="w-full relative">
              <Image
                src={"https://i.ibb.co/SQ46L2V/playstation-5.png"}
                alt="hero"
                width={1200}
                height={900}
                className="object-cover h-[650px] rounded-lg"
              />
              <div className="flex flex-col gap-y-4 absolute top-12 left-8">
                <h2 className="lg:text-2xl text-xl font-semibold">
                  Playstation 5 Pro
                </h2>
                <p className="font-light w-[300px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae similique iusto a quos illo esse.
                </p>
                <div className="mt-4">
                  <Button variant={"secondary"} className="bg-white text-black">
                    Quick Look
                  </Button>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-y-4">
              <div className="w-full relative">
                <Image
                  src={"https://i.ibb.co/XkDS6Ks/vr-quest.png"}
                  alt="hero"
                  width={1550}
                  height={620}
                  className="object-cover h-[350px] rounded-lg"
                />
                <div className="flex flex-col gap-y-4 absolute top-12 left-8">
                  <h2 className="lg:text-2xl text-xl font-semibold">
                    Meta Quest 3
                  </h2>
                  <p className="font-light w-[300px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="mt-4">
                    <Button
                      variant={"link"}
                      className="text-white text-wrap p-0"
                    >
                      More Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-5 w-full h-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"https://i.ibb.co/1Z8PpWk/vision-2.png"}
                    alt="hero"
                    width={1000}
                    height={726}
                    className="object-cover h-[300px] rounded-lg"
                  />
                </div>
                <div className="w-full h-full relative">
                  <Image
                    src={"https://i.ibb.co/D42tSCD/jbl-img.jpg"}
                    alt="hero"
                    width={1000}
                    height={726}
                    className="object-center h-[300px] rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlistedProductsSection;
