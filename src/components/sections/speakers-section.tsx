/* eslint-disable @typescript-eslint/no-explicit-any */
import getSpeakers from "@/actions/get-speakers";
import React from "react";
import ProductCard from "../product-card";
import SectionButton from "../section-button";
import { URLS } from "@/shared/routes/products-routes";

async function SpeakersSection() {
  const data = await getSpeakers("speakers", 4, 0);

  return (
    <div className="w-full h-full flex flex-col gap-y-4 py-8 md:px-6">
      <div className="container mx-auto md:px-16 2xl:px-32 px-4">
        <header className="flex w-full justify-between items-center pb-8">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl md:font-semibold text-center">
            Speakers.
          </h2>
        </header>
        <section className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 2xl:gap-x-0 2xl:gap-y-10 gap-2 justify-items-center">
          {data.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
        <div className="w-full flex justify-center items-center py-8">
          <SectionButton link={URLS.speakers} />
        </div>
      </div>
    </div>
  );
}

export default SpeakersSection;
