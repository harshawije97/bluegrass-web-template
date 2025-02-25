/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import ThumbsButton from "./thumbs-button";
import Image from "next/image";
import { LazyLoadImageXL } from "@/components/lazy-load-image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  content: any;
};

function ProductCarousel({ slides, options, content }: PropType) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-full m-auto h-full border-spacing-4">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex touch-pinch-zoom ml-[calc(1rem*-1)]">
          {content.map((item: string, idx: number) => (
            <div
              className="transform flex-none w-full min-w-full pl-4"
              style={{ transform: `translate3d(0, 0, 0)` }}
              key={idx}
            >
              <div className="shadow-sm rounded-md text-6xl font-semibold flex justify-center items-center select-none">
                <LazyLoadImageXL item={item} alt="carousel-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-spacing-3 w-full h-[6rem] mt-3">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex flex-row ml-[calc(0.8rem*-1)]">
            {content.map((url: string, index: number) => (
              <ThumbsButton
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                content={url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
