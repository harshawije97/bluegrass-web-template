import Header from "@/components/header";
import { ItemsGridApple, ItemsGridSamsung } from "@/components/items-grid";
import AboutUsSummery from "@/components/sections/about-us-summery";
import AccessoriesSection from "@/components/sections/accessories-section";
import AppleProductsSection from "@/components/sections/apple-products-section";
import BestsellerSection from "@/components/sections/bestseller-section";
import HeadsetSection from "@/components/sections/headset-section";
import OtherProductsSection from "@/components/sections/other-products-section";
import SamsungProductsSection from "@/components/sections/samsung-products-section";
import ServicesSection from "@/components/sections/services-section";
import SpeakersSection from "@/components/sections/speakers-section";
import UnlistedProductsSection from "@/components/sections/unlisted-products-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {/* Bestseller section */}
      <BestsellerSection />
      {/* Apple section */}
      <AppleProductsSection />
      <div className="w-full h-full flex flex-col gap-y-4 bg-black py-10">
        {/* Apple grid section */}
        <ItemsGridApple />
      </div>
      {/* Samsung section */}
      <div className="w-full py-8 md:py-12">
        <SamsungProductsSection />
      </div>
      <div className="w-full h-full flex flex-col gap-y-4 bg-black py-10">
        {/* Samsung grid section */}
        <ItemsGridSamsung />
      </div>
      {/* Other products */}
      <div className="w-full h-full pt-8">
        <OtherProductsSection />
      </div>
      {/* Unlisted products Section */}
      <UnlistedProductsSection />
      {/* Headsets section */}
      <HeadsetSection />
      {/* Accessories section */}
      <AccessoriesSection />
      {/* Speakers section */}
      <SpeakersSection />
      {/* Services section */}
      <ServicesSection />
      {/* About us summery section */}
      <div className="w-full h-full mt-12">
        <AboutUsSummery />
      </div>
    </div>
  );
}
