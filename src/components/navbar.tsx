"use client";
import { cn } from "@/lib/utils";
import { navbarRoutes } from "@/shared/routes/index-routes";
import { Search, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNavbar from "./mobile-navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  let pageId = "";

  const params = usePathname();
  const routeName = params?.split("/")[1];

  if (routeName === "") {
    pageId = "home";
  } else {
    pageId = routeName;
  }

  return (
    <>
      <section className="md:hidden">
        <MobileNavbar slug={pageId} />
      </section>
      <div className="w-full h-full flex justify-center items-center">
        <div className="hidden md:flex w-full">
          <nav
            className={cn(
              pageId === "home"
                ? "bg-black text-white"
                : "bg-white text-black border-b border-gray-200",
              "fixed w-full z-50 top-0 left-0"
            )}
          >
            <div className="max-w-[1400px] mx-auto px-4">
              <div className="flex items-center justify-between h-14">
                <div>
                  <Link href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                      {pageId === "home" ? (
                        <Image
                          src="/logos/Default-logo.svg"
                          alt="logo"
                          width={50}
                          height={50}
                          className="object-contain w-[35px] h-[35px]"
                        />
                      ) : (
                        <Image
                          src="/logos/Black-logo.svg"
                          alt="logo"
                          width={50}
                          height={50}
                          className="object-contain w-[29px] h-[29px]"
                        />
                      )}
                    </span>
                  </Link>
                </div>
                <div className="flex space-x-8">
                  {navbarRoutes.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-xs font-medium "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center space-x-0">
                  <Button
                    variant={"ghost"}
                    className={cn(pageId === "home" ? " text-white" : "text-black hover:text-gray-500 hover:bg-transparent")}
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button
                    variant={"ghost"}
                    className={cn(pageId === "home" ? " text-white" : "text-black hover:text-gray-500 hover:bg-transparent")}
                    aria-label="Shopping cart"
                  >
                    <User2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
