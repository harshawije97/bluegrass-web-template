/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import getCategoryIdAsync from "@/api/category/get-category-id";
import Image from "next/image";
import React from "react";

interface MiniVisualizerProps {
  sku: string;
  categoryId: string;
  tags: string[];
}

function MiniVisualizer({ sku, categoryId, tags }: MiniVisualizerProps) {
  const [category, setCategory] = React.useState<any>(null);

  React.useEffect(() => {
    const category = getCategoryIdAsync(categoryId);
    category.then(({ data }) => {
      // eslint-disable-next-line prefer-const
      let category = data[0];
      setCategory(category);
    });
  }, []);
  return (
    <>
      <section className="flex gap-x-2">
        <p className="text-sm font-semibold text-slate-900">SKU:</p>
        <p className="text-sm font-light text-blue-400">{sku}</p>
      </section>
      <section className="flex gap-x-2">
        <p className="text-sm font-semibold text-slate-900">Category:</p>
        <p className="text-sm font-light text-blue-400">
          {category && category.name}
        </p>
      </section>
      <section className="flex gap-x-2">
        <p className="text-sm font-semibold text-slate-900">Tags:</p>
        {tags.map((tag: any, index: number) => (
          <p key={index} className="text-sm font-light text-blue-400">
            {tag.value}
          </p>
        ))}
      </section>
      <section className="flex gap-x-2">
        <p className="text-sm font-semibold text-slate-900">Follow:</p>
        <div className="flex flex-row gap-x-2">
          <span
            className="cursor-pointer"
            onClick={() => console.log("facebook")}
          >
            <Image
              src="/icons/pp-sm-icons/facebook.svg"
              width={20}
              height={20}
              alt="facebook"
            />
          </span>
          <span onClick={() => console.log("instagram")}>
            <Image
              src="/icons/pp-sm-icons/instagram.svg"
              width={20}
              height={20}
              alt="instagram"
            />
          </span>
          <span onClick={() => console.log("tiktok")}>
            <Image
              src="/icons/pp-sm-icons/tiktok.svg"
              width={20}
              height={20}
              alt="tiktok"
            />
          </span>
        </div>
      </section>
    </>
  );
}

export default MiniVisualizer;
