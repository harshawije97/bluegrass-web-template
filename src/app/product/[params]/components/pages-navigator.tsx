/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import {
  ArrowLeft,
  Heart,
  Share2,
  Slash,
  SlidersHorizontal,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PagesNavigatorProps {
  title?: string;
  previousLink: string;
  children?: React.ReactNode;
}

function PagesNavigator({ children, title }: PagesNavigatorProps) {
  const router = useRouter();

  const onNavigateBack = () => {
    router.back();
  };

  return (
    <header className="flex justify-between items-center md:px-6 py-1 border-b lg:mt-14">
      <a href="#">
        <Button
          type="button"
          variant={"ghost"}
          onClick={onNavigateBack}
          className="gap-2"
          size={"default"}
        >
          <ArrowLeft size={20} />
          Previous
        </Button>
      </a>

      <div className="w-max md:h-14 h-10 flex items-center justify-center md:gap-x-6">
        <div>
          <Button type="button" variant={"ghost"} size={"sm"}>
            <Heart size={20} className="text-red-500" />
            <p className="text-xs">Add to wishlist</p>
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div className="w-max text-slate-500">
          <Button type="button" variant={"ghost"} size={"sm"}>
            <Share2 size={20} />
            <p className="text-xs">Share</p>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default PagesNavigator;
