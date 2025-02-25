"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { navbarRoutes } from "@/shared/routes/index-routes";
import { Button } from "./ui/button";
import { Search, User2 } from "lucide-react";
import Image from "next/image";

function MobileNavbar({ slug }: { slug: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav
      className={cn(
        slug === "home" ? "bg-black text-white" : "bg-white",
        "w-full h-14 flex justify-between items-center gap-4 px-4"
      )}
    >
      <div className="w-auto flex-1 flex justify-start">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Image
              src="/logos/Footer-logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="object-contain w-[35px] h-[35px]"
            />
          </span>
        </Link>
      </div>
      <div className="w-auto flex gap-x-2">
        <Button
          variant={"ghost"}
          className={cn(
            slug === "home" ? "bg-black text-white" : "bg-white text-slate-800",
            "text-gray-50 hover:text-gray-200 hover:bg-transparent p-0"
          )}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>
        <Button
          variant={"ghost"}
          className={cn(
            slug === "home" ? "bg-black text-white" : "bg-white text-slate-800",
            "text-gray-50 hover:text-gray-200 hover:bg-transparent p-0"
          )}
          aria-label="Shopping cart"
        >
          <User2 className="h-5 w-5" />
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className={cn(
              slug === "home"
                ? "bg-black text-white"
                : "bg-white text-slate-800",
              "h-screen w-full"
            )}
          >
            <div className="w-full h-full px-4 pt-8">
              <ul className="flex flex-col gap-y-4 justify-start items-start">
                {navbarRoutes.map((route, idx: number) => (
                  <li key={idx}>
                    <Link href={route.href} onClick={() => setIsOpen(false)}>
                      <p className="text-2xl font-medium">{route.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default MobileNavbar;
