import ImageGridDesktop from "@/components/image-grid-desktop";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

function AboutUsPage() {
  return (
    <div className="w-full h-full">
      <div className="bg-white">
        <div className="container mx-auto p-4 md:p-8">
          <div className="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 md:justify-start md:items-start justify-center items-center">
            <h2 className="lg:text-4xl font-semibold text-2xl">Our Story.</h2>
            <p className="font-light text-slate-500">
              Customer journey and our story
            </p>
          </div>
          <div className="pt-12 w-full h-full">
            {/* Our story section */}
            <section className="flex flex-col pb-10">
              <p className="text-slate-400 md:text-start text-center">
                Blue Grass Cellular is Sri Lanka&apos;s leading mobile retailer,
                proudly serving the nation with over 27 years of industry
                excellence. Specializing in an extensive range of cutting-edge
                mobile phones and premium accessories, we are committed to
                delivering unparalleled quality and value. Every product we
                offer is backed by genuine warranties, ensuring reliability and
                peace of mind for our customers.
              </p>
              <br />
              <p className="text-slate-400 md:text-start text-center">
                Our unwavering focus on exceptional service has established us
                as a trusted name in the industry, where professionalism,
                innovation, and customer satisfaction converge. We recognize
                that technology is not just about devices but about empowering
                lives, which is why our knowledgeable team is dedicated to
                helping you find tailored solutions that meet your specific
                needs.
              </p>
              <br />
              <p className="text-slate-400 md:text-start text-center">
                At Blue Grass Cellular, we go beyond sales—we build
                relationships rooted in trust, offering not only the latest in
                mobile technology but also ongoing support and expertise. From
                state-of-the-art smartphones to essential accessories, we
                provide a seamless shopping experience designed to exceed
                expectations.
              </p>
              <br />
              <p className="text-slate-400 md:text-start text-center">
                Discover the Blue Grass Cellular difference: where a legacy of
                excellence, a commitment to innovation, and a customer-first
                philosophy make us the premier destination for all your mobile
                technology needs. Trust us to deliver more than products—trust
                us to deliver a promise of quality, reliability, and
                unparalleled service.
              </p>
            </section>
            <section className="flex flex-col pb-20 gap-y-6">
              <header>
                <h2 className="font-semibold text-blue-500 md:text-xl">
                  Our Happy Customers
                </h2>
              </header>
              {/* Image grid mobile */}
              <div className="md:hidden flex">
                <ScrollArea className="w-[340px] h-full">
                  <div className="flex gap-3 w-max">
                    <Image
                      src={"/img/customers/customers.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-contain rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_2.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_3.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_4.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_5.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              {/* Image grid desktop */}
              <ImageGridDesktop />
              <div className="w-full flex flex-col gap-6">
                <div className="mb-7 2xl:pr-5 pt-10 flex-col gap-y-2 md:justify-start md:items-start justify-center items-center">
                  <h2 className="lg:text-4xl font-semibold text-2xl">
                    Our Services.
                  </h2>
                  <p>What we offer for you</p>
                </div>
                <p className="text-slate-400 md:text-start text-center">
                  Blue Grass Cellular is Sri Lanka’s premier mobile retailer,
                  proudly serving the nation with over 27 years of unmatched
                  excellence in the industry. Renowned for our specialization in
                  high-quality mobile phones and accessories, we have set the
                  benchmark for reliability, innovation, and superior customer
                  service.
                </p>
                <p className="text-slate-400 md:text-start text-center">
                  At Blue Grass Cellular, we don’t just sell mobile
                  technology—we create lasting relationships with our customers,
                  built on trust, quality, and service excellence. Experience
                  the pinnacle of professionalism and discover why we are Sri
                  Lanka’s preferred destination for mobile devices and
                  accessories. With Blue Grass Cellular, you can trust that
                  every interaction will deliver innovation, reliability, and
                  complete satisfaction.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
