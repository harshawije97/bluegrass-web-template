"use client";

import Link from "next/link";
import React from "react";

function AboutUsSummery() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 px-16">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl md:font-semibold">
            About Us.
          </h2>
          <p className="text-base">
            Blue Grass Cellular is Sri Lanka&apos;s leading mobile retailer,
            proudly serving the nation with over 27 years of industry
            excellence. Specializing in an extensive range of cutting-edge
            mobile phones and premium accessories, we are committed to
            delivering unparalleled quality and value.
          </p>
          <p>
            Every product we offer is backed by genuine warranties, ensuring
            reliability and peace of mind for our customers. Our unwavering
            focus on exceptional service has established us as a trusted name in
            the industry, where professionalism, innovation, and customer
            satisfaction converge. We recognize that technology is not just
            about devices but about empowering lives, which is why our
            knowledgeable team is dedicated to helping you find tailored
            solutions that meet your specific needs.{" "}
            <Link href={"/about-us"} className="text-sm md:text-base  text-blue-600">
              You can read more in here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSummery;
