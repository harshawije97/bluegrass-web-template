"use client";
import React from "react";
import ProductColorPicker from "./product-color-picker";
import ItemsStorage from "./items-storage";

interface MainProductDetailsProps {
  displayInfo: string;
  storage: string[];
  camera: string;
  battery: string;
  colors: string[];
  ramInformation: string;
}

function MainProductDetails({
  displayInfo,
  storage,
  camera,
  battery,
  colors,
  ramInformation,
}: MainProductDetailsProps) {
  return (
    <div className="flex flex-col gap-y-6 w-full pl-3">
      <section className="flex flex-col gap-y-2">
        <p className="text-base font-semibold">Display</p>
        <span className="flex w-full items-center gap-x-6">
          <p className="text-slate-400">{displayInfo}</p>
        </span>
      </section>
      <section className="flex-col gap-y-4 flex">
        <ProductColorPicker colors={colors} />
      </section>
      <section className="flex flex-col gap-y-2">
        <p className="text-base font-semibold">Memory</p>
        <div className="w-full grid grid-cols-2 gap-4">
          {storage.map((item, index) => (
            <ItemsStorage key={index} title={item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-2">
        <p className="text-base font-semibold">Battery</p>
        <span className="flex w-full items-center gap-x-6">
          <p className="text-slate-400">{battery}</p>
        </span>
      </section>
      <section className="flex flex-col gap-y-2">
        <p className="text-base font-semibold">Camera</p>
        <span className="flex w-full items-center gap-x-4">
          <p className="text-slate-400">{camera}</p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Hardware</p>
        <span className="flex w-full items-center gap-x-4">
          <p className="text-slate-400">
            upto {ramInformation} of speed in RAM
          </p>
        </span>
      </section>
    </div>
  );
}

export default MainProductDetails;
