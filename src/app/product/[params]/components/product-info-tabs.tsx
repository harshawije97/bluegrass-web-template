import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ProductDescription } from "./product-description";
import RelatedProductsContainer from "./related-products-container";

interface ProductInfoTabsProps {
  description: string;
  additionalInfo: string;
  categoryId: string;
  brandId: string;
}

function ProductInfoTabs({
  description,
  additionalInfo,
  brandId,
  categoryId,
}: ProductInfoTabsProps) {
  return (
    <>
      <Tabs defaultValue="additionalInfo" className="w-full hidden md:block">
        <TabsList className="flex flex-row justify-evenly">
          <TabsTrigger value="additionalInfo">
            Additional Information
          </TabsTrigger>
          <TabsTrigger value="relatedProducts">Related Products</TabsTrigger>
        </TabsList>
        <TabsContent value="additionalInfo">
          <div className="flex flex-col gap-y-4 py-10 mb-8">
            <section className="mb-8">
              <p className="font-light text-slate-400">{description}</p>
            </section>
            <div className="w-full h-full flex flex-col gap-6 pt-8">
              <ProductDescription additionalInfo={additionalInfo} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="relatedProducts">
          <div className="w-full h-full flex flex-col gap-y-4 py-10">
            {/* add related products */}
            <RelatedProductsContainer brand={brandId} category={categoryId} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
export default ProductInfoTabs;
