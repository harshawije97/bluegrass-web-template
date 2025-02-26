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
                className="object-cover md:h-[650px] h-[450px] rounded-lg opacity-60"
              />
              <div className="flex flex-col gap-y-3 absolute top-12 left-8">
                <h2 className="lg:text-2xl text-xl font-semibold">
                  Playstation 5 Pro
                </h2>
                <p className="font-light w-[300px] text-sm">
                  Entertainment beyond your imagination
                </p>
                <div className="mt-4">
                  <Button
                    variant={"secondary"}
                    className="bg-white text-black font-semibold text-sm rounded-full"
                  >
                    Quick Look
                  </Button>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-y-4">
              <div className="w-full relative">
                <Image
                  src={"https://i.ibb.co/1Z8PpWk/vision-2.png"}
                  alt="hero"
                  width={1550}
                  height={620}
                  className="object-cover h-[350px] rounded-lg opacity-70"
                />
                <div className="flex flex-col gap-y-2 absolute top-12 left-8">
                  <h2 className="lg:text-2xl text-xl font-medium">
                    Apple Vision Pro
                  </h2>
                  <p className="font-light w-[300px]">
                    Imagination beyond your limits
                  </p>
                  <div className="mt-4">
                    <Button
                      variant={"secondary"}
                      className="bg-white text-black font-semibold text-sm rounded-full"
                    >
                      Browse
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-x-5 gap-y-4 w-full h-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"https://i.ibb.co/b5PLNBmN/image-qr.png"}
                    alt="hero"
                    width={1000}
                    height={726}
                    className="object-cover h-[300px] rounded-lg"
                  />
                </div>
                <div className="w-full h-full relative">
                  <Image
                    src={"https://i.ibb.co/1YyH9rC3/flip-jbl.png"}
                    alt="hero"
                    width={920}
                    height={560}
                    className="object-center h-[220px] md:h-[300px] rounded-lg"
                  />
                  <div className="flex flex-col gap-y-2 absolute top-12 left-8">
                    <h2 className="lg:text-2xl text-xl font-medium">
                      JBL Speakers
                    </h2>
                    <p className="font-light w-[300px] text-sm">
                      Sound & Music for your entertainment
                    </p>
                    <div className="mt-4">
                      <Button
                        variant={"secondary"}
                        className="bg-[#1C1917] text-white px-6 text-sm rounded-full"
                      >
                        Browse
                      </Button>
                    </div>
                  </div>
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
