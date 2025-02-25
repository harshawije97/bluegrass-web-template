/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import ProductsNavigation from "./components/products-navigation";
import ProductsContainer from "./components/products-container";

function ProductsPage({ params, searchParams }: any) {
  return (
    <Suspense>
      <div className="w-full h-full">
        <div className="flex flex-col gap-6 w-full">
          {Object.entries(searchParams).length !== 0 && (
            <ProductsNavigation category={searchParams.category} />
          )}
          <div className="w-full py-6">
            <ProductsContainer />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default ProductsPage;
