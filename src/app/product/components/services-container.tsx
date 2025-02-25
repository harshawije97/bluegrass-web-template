"use client";

import React from "react";
import { Package, Truck } from "lucide-react";

function ServicesContainer() {
  return (
    <section className="flex md:gap-12 gap-x-6 md:mx-12 mx-4 py-6">
      {/* Services section */}
      <span className="flex flex-col gap-y-2 items-center w-full text-center">
        <Truck className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p className="font-medium">Free delivery</p>
        <small className="text-slate-500 text-xs">
          Free shipping on all orders
        </small>
      </span>
      <span className="flex flex-col gap-y-2 items-center w-full text-center">
        <Package className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p className="font-medium">Safe Packaging</p>
        <small className="text-slate-500 text-xs">
          Package safety is the first priority for us
        </small>
      </span>
      {/* <span className="md:flex flex-col gap-y-2 hidden w-full text-center">
        <ShieldCheck className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p className="font-medium">Shop warranty</p>
        <small className="text-slate-500 text-xs">
          Shop or order company warranties
        </small>
      </span> */}
    </section>
  );
}

export default ServicesContainer;
