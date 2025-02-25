"use client";

import React from "react";
import parse from "html-react-parser";

interface ProductInfoTabsProps {
  additionalInfo: string;
}

function ProductDescriptionMobile({ additionalInfo }: ProductInfoTabsProps) {
  return (
    <div className="p-0 w-full h-full flex flex-col gap-8 mt-8">
      {parse(additionalInfo)}
    </div>
  );
}

function ProductDescription({ additionalInfo }: ProductInfoTabsProps) {
  return (
    <div className="p-0 w-full h-full flex flex-col gap-8 mt-8">
      {parse(additionalInfo)}
    </div>
  );
}
export { ProductDescription };
export default ProductDescriptionMobile;
