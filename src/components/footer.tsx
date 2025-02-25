import Link from "next/link";
import React from "react";
import FooterLogo from "./footer-logo";
import { Separator } from "./ui/separator";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black px-6 lg:px-20">
      <div className="container mx-auto md:px-20 lg:px-64 flex flex-col gap-6 w-full">
        <div className="text-white grid grid-cols-1 md:grid-cols-3 w-full items-center">
          <div className="flex flex-col gap-y-4 md:min-w-[300px] py-6">
            <FooterLogo />
            <h1 className="text-2xl font-semibold">Bluegrass Cellular</h1>
            <p className="text-sm">
              Blue Grass Cellular: Sri Lanka’s trusted mobile retailer with 27+
              years of excellence. Discover premium smartphones, accessories,
              and expert support. Quality, reliability, and unmatched
              service—your journey to cutting-edge technology starts here
            </p>
          </div>
          <div className="w-full flex md:justify-center gap-x-8 pb-12 md:pb-0">
            {/* Quick Access */}
            <div>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <Link href={"/"} className="text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/products"} className="text-sm">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href={"/about-us"} className="text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} className="text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Shop now */}
          </div>
          {/* follow us on */}
          <div className="flex flex-col w-full gap-4 items-start justify-center md:pl-8">
            <header>
              <h4>Follow us on</h4>
            </header>
            <section className="flex flex-row gap-x-6">
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Tiktok</Link>
              <Link href={"#"}>Instagram</Link>
            </section>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-y-2 pt-4 text-white md:gap-x-12 justify-start items-center w-full h-12 md:py-8">
          <p className="text-xs">
            Copyright © 2024 Digital Markup. All rights reserved.
          </p>
          <div className="text-xs flex gap-2 items-center">
            <Link href={"#"}>Privacy Policy</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href={"#"}>Terms & Conditions</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href={"#"}>Site Map</Link>
          </div>
          <div className="flex gap-x-4">
            <Image
              src={"/logos/Payment-Logos.svg"}
              width={261}
              height={35}
              alt="payment"
              className="w-[210px] h-[35px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
