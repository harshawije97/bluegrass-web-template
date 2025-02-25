"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface Props {
  category: string | "all";
  brand?: string;
}

function BreadcrumbNav({ category, brand }: Props) {
  return (
    <div className="w-full md:mt-6 px-4 md:px-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            {category === "all" ? (
              <p>Products</p>
            ) : (
              <p className="capitalize">{category}</p>
            )}
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="capitalize">{brand}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbNav;
