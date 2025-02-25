import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

async function ServicesSection() {
  return (
    <div className="bg-transparent md:hidden lg:block">
      <div className="container mx-auto md:px-16 2xl:px-32 px-4">
        <header className="flex w-full gap-x-2 items-center py-8">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl md:font-semibold text-center">
            Our Services.
          </h2>
          <p className="text-xl xl:text-2xl 2xl:text-3xl md:font-semibold text-center text-slate-400">
            What we offer for you
          </p>
        </header>
      </div>
      <ScrollArea className="w-[360px] h-auto md:hidden">
        <div className="w-max h-full flex space-x-4 px-6">
          <div className="w-[360px] xl:w-[480px] h-full bg-white shadow-md px-4 py-8 rounded-lg flex flex-col gap-4">
            <header className="w-full flex">
              <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                Extensive Product Range
              </p>
            </header>
            <div className="flex flex-1 h-full w-full">
              <h2 className="text-slate-800 text-xl md:text-2xl text-balance">
                Offering a comprehensive selection of the latest smartphones,
                advanced gadgets, and premium accessories to meet every need and
                preference
              </h2>
            </div>
          </div>
          <div className="w-max grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex w-[309px] bg-white shadow-md px-4 py-8 rounded-lg flex-col gap-4">
              <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                Guaranteed Quality
              </p>
              <h2 className="text-slate-800 text-xl md:text-2xl text-balance">
                Every product is backed by genuine warranties, ensuring
                reliability, durability, and peace of mind for our customers
              </h2>
            </div>
            <div className="flex w-[309px] h-full bg-white shadow-md px-4 py-8 rounded-lg flex-col gap-4">
              <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                Trusted Reputation
              </p>
              <h2 className="text-slate-800 text-xl md:text-2xl text-balance">
                With nearly three decades of expertise, we have earned the trust
                of countless customers, making us a household name for mobile
                technology solutions in Sri Lanka.
              </h2>
            </div>
            <div className="flex w-[309px] h-full bg-white shadow-md px-4 py-8 rounded-lg flex-col gap-4">
              <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                Commitment to Excellence
              </p>
              <h2 className="text-slate-800 text-xl md:text-2xl text-balance">
                From product quality to after-sales support, our focus on
                excellence ensures an unparalleled shopping experience
              </h2>
            </div>
            <div className="flex w-[309px] h-full bg-white shadow-md px-4 py-8 rounded-lg flex-col gap-4">
              <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                Value-Driven Solutions
              </p>
              <h2 className="text-slate-800 text-xl md:text-2xl text-balance">
                We prioritize offering the best value for money, combining
                premium products with competitive pricing and expert support
              </h2>
            </div>
          </div>
          <div className="w-[360px] xl:w-[480px] bg-white shadow-md rounded-lg flex flex-col gap-4 relative">
            <Image
              src={"/img/customer-service.jpeg"}
              alt={"customer-service"}
              width={480}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />

            <div className="absolute w-full p-6 flex flex-col gap-4">
              <header className="w-full flex">
                <p className="bg-gradient-to-r text-slate-500 text-sm">
                  Exceptional Customer Service
                </p>
              </header>
              <h2 className="text-slate-800 text-xl md:text-2xl text-balance">
                Our highly knowledgeable and professional team is dedicated to
                delivering personalized solutions
              </h2>
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="w-full h-full py-8 hidden md:block">
        <section className="container mx-auto">
          <div className="grid 2xl:grid-cols-[1fr_626px_1fr] lg:grid-cols-[1fr_520px_1fr] md:grid-cols-[1fr_626px_1fr] gap-10 w-full">
            <div className="flex flex-col 2xl:w-[420px] h-full bg-white shadow-md rounded-lg relative">
              <Image
                src={"/img/store-card.jpeg"}
                alt={"customer-service"}
                width={480}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute w-full p-6 flex flex-col gap-4">
                <header className="w-full flex">
                  <p className="bg-gradient-to-r text-slate-500 text-sm">
                    Extensive Product Range
                  </p>
                </header>
                <h2 className="text-slate-800 text-lg md:text-xl text-semibold text-balance">
                  Offering a comprehensive selection of the latest smartphones,
                  advanced gadgets, and premium accessories to meet every need
                  and preference
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-4 w-full">
              <div className="2xl:w-[312px] h-[240px] bg-white shadow-md rounded-lg flex flex-col gap-4 px-6 py-4">
                <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                  Guaranteed Quality
                </p>
                <h2 className="text-slate-800 text-lg md:text-xl text-semibold text-balance">
                  Every product is backed by genuine warranties, ensuring
                  reliability, durability, and peace of mind for our customers
                </h2>
              </div>
              <div className="2xl:w-[312px] h-[240px] bg-white shadow-md rounded-lg flex flex-col gap-4 px-6 py-4">
                <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                  Trusted Reputation
                </p>
                <h2 className="text-slate-800 text-xl md:text-xl text-semibold text-balance">
                  With nearly 3 decades of expertise, we have earned the trust
                  of countless customers.
                </h2>
              </div>
              <div className="2xl:w-[312px] h-[240px] bg-white shadow-md rounded-lg flex flex-col gap-4 px-6 py-4">
                <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                  Commitment to Excellence
                </p>
                <h2 className="text-slate-800 text-xl md:text-xl text-semibold text-balance">
                  From product quality to after-sales support, our focus on
                  excellence ensures an unparalleled shopping experience
                </h2>
              </div>
              <div className="w-[312px] h-[240px] bg-white shadow-md rounded-lg flex flex-col gap-4 px-6 py-4">
                <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-sm">
                  Value-Driven Solutions
                </p>
                <h2 className="text-slate-800 text-xl md:text-xl text-semibold text-balance">
                  We prioritize offering the best value for money, combining
                  premium products with competitive pricing and expert support
                </h2>
              </div>
            </div>
            <div className="flex flex-col 2xl:w-[420px] h-full bg-white shadow-md rounded-lg relative">
              <Image
                src={"/img/customer-service.jpeg"}
                alt={"customer-service"}
                width={480}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute w-full p-6 flex flex-col gap-4">
                <header className="w-full flex">
                  <p className="bg-gradient-to-r text-slate-500 text-sm">
                    Exceptional Customer Service
                  </p>
                </header>
                <h2 className="text-slate-800 text-xl md:text-xl text-semibold text-balance">
                  Our highly knowledgeable and professional team is dedicated to
                  delivering personalized solutions
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesSection;
