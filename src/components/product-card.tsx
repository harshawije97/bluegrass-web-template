/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import getSignedUrl from "@/api/media/get-signed-url";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RatingsCard from "@/app/components/ratings-card";
import LazyLoadImage from "./lazy-load-image";

interface ProductCardProps {
  id: string;
  feature_image: { id: string; imgUrl: string };
  title: string;
  colors: string[];
  tags: any;
  [key: string]: any;
  isTags?: boolean;
}

function ProductCard({
  id,
  feature_image,
  title,
  colors,
  tags,
  ...args
}: ProductCardProps) {
  const [ratings, setRatings] = React.useState(0);

  return (
    <a href={`/product/${id}`}>
      <div className="w-[165px] md:w-[278px] h-full rounded-xl border flex flex-col cursor-pointer p-1 md:p-0">
        <figure className="flex flex-col justify-center items-center w-full h-full">
          {feature_image.id ? (
            <LazyLoadImage alt={title} item={feature_image.imgUrl} {...args} />
          ) : (
            <section className="w-[160px] h-[160px] sm:w-[160px] lg:w-[260px] sm:h-[260px] bg-white" />
          )}
        </figure>
        <div className="w-full h-full flex flex-col px-4 md:pb-10 pb-6 justify-center items-center gap-y-2">
          <h2 className="md:text-lg text-sm font-medium">{title}</h2>
          {ratings > 0 && <RatingsCard number={ratings} />}
          <div className="w-auto flex gap-x-2">
            {colors.map((color: string, idx: number) => (
              <span
                key={idx}
                style={{ backgroundColor: color }}
                className={`w-3 h-3 rounded-full cursor-pointer hover:scale-110`}
              ></span>
            ))}
          </div>
          <section className="mt-2 flex w-full gap-x-2 justify-center flex-wrap">
            {tags.map((tag: any, idx: number) => (
              <p
                className="text-xs md:text-sm capitalize text-slate-500"
                key={idx}
              >
                {tag.label}
              </p>
            ))}
          </section>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
