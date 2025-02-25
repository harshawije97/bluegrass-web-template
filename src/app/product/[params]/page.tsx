/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ServicesContainer from "../components/services-container";
import ContactUs from "../components/contact-us-mini";
import { Separator } from "@/components/ui/separator";
import getProductAction from "./actions/getProductAction";
import PagesNavigator from "./components/pages-navigator";
import MainProductHeader from "./components/main-product-header";
import MainProductDetails from "./components/main-product-details";
import MainProductContainer from "./components/main-product-container";
import ProductInfoTabs from "./components/product-info-tabs";
import ProductDescriptionMobile from "./components/product-description";
import MiniVisualizer from "./components/mini-visualizer";
import BasicInformation from "./components/basic-information";
import RelatedProductsContainer from "./components/related-products-container";

async function SingleProductPage({ params }: any) {
  const [data] = await getProductAction(params.params);

  return (
    <>
      {data ? (
        <div className="w-full min-h-screen">
          {/* Breadcrumb nav*/}
          <PagesNavigator previousLink="/products" title={data.title} />
          <div className="container mx-auto md:px-6 px-1">
            <div className="w-full grid lg:grid-cols-[1fr_430px] gap-x-5 gap-4 my-6">
              <div className="lg:sticky top-8 lg:h-screen overflow-hidden w-full h-full flex justify-center">
                <div className="flex flex-col gap-y-4 md:w-[620px] w-[345px] h-full">
                  {/* main product layout */}
                  <MainProductContainer
                    images={data.images}
                    stock={data.stock}
                    title={data.title}
                    feature={data.feature_image}
                  />
                  <div className="md:flex flex-col gap-y-4 hidden">
                    <ServicesContainer />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 lg:py-12">
                {/* side product information */}
                <MainProductHeader
                  stock={data.stock}
                  title={data.title}
                  className="hidden md:flex"
                />
                {data.display_info !== "" ? (
                  <MainProductDetails
                    battery={data.battery}
                    camera={data.camera}
                    colors={data.colors}
                    displayInfo={data.display_info}
                    ramInformation={data.ram_information}
                    storage={data.storage}
                  />
                ) : (
                  <BasicInformation params={data.basic_information} />
                )}
                <Separator />
                <div className="flex flex-col gap-y-2 px-4">
                  <MiniVisualizer
                    categoryId={data.category_id}
                    sku={data.sku}
                    tags={data.tags}
                  />
                </div>
                <Separator />
                <ContactUs />
                <div className="flex flex-col gap-y-4 md:hidden">
                  <ServicesContainer />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full md:pl-12 px-3">
              {/* Tabs with additional information */}
              <div className="flex flex-row w-full justify-evenly items-center md:mt-20 mt-10">
                <ProductInfoTabs
                  description={data.product_description}
                  additionalInfo={data.additional_information}
                  brandId={data.brand_id}
                  categoryId={data.category_id}
                />
              </div>
              {/* mobile tabs */}
              <div className="flex flex-col gap-y-4 py-5 md:hidden">
                <header>
                  <h2 className="font-bold text-2xl">Additional Information</h2>
                </header>
                <section className="mb-8">
                  <p className="font-light text-lg capitalize">
                    product description
                  </p>
                </section>
                <div className="w-full h-full flex flex-col gap-6">
                  <p>{data.product_description}</p>
                </div>
                <section className="mb-8">
                  <ProductDescriptionMobile
                    additionalInfo={data.additional_information}
                  />
                </section>
                <Separator className="my-4" />
                <header>
                  <h2 className="font-bold text-2xl">Related Products</h2>
                </header>
                <RelatedProductsContainer
                  brand={data.brand_id}
                  category={data.category_id}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-black">Loading...</p>
      )}
    </>
  );
}

export default SingleProductPage;
