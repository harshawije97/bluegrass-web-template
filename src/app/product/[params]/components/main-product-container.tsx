/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import MainProductHeader from "./main-product-header";
import getProductImagesAction from "../actions/getProductImagesAction";
import ProductCarousel from "./product-carousel";
import { EmblaOptionsType } from "embla-carousel";

interface MainProductContainerProps {
  images: Array<any>;
  stock: number;
  title: string;
  feature: any;
  variations?: Array<string>;
}

// Carousel options
const OPTIONS: EmblaOptionsType = {};

function MainProductContainer({
  images,
  title,
  stock,
  feature,
}: MainProductContainerProps) {
  const [urls, setUrls] = React.useState<string[]>([]);

  React.useEffect(() => {
    const data = getProductImagesAction(feature, images);
    setUrls(data);
  }, []);

  return (
    <div className="flex flex-col gap-y-8">
      {/* side product information */}
      <MainProductHeader stock={stock} title={title} className="md:hidden" />
      <div className="w-full h-full lg:py-6 lg:px-12 px-4">
        <ProductCarousel
          slides={Array.from(Array(urls.length).keys())}
          options={OPTIONS}
          content={urls}
        />
      </div>
    </div>
  );
}

export default MainProductContainer;
