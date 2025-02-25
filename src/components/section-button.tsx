"use client";

import React from "react";
import { Button } from "./ui/button";

interface Props {
  link: string;
}

function SectionButton({ link }: Props) {
  return (
    <a href={link} className="w-full flex justify-center items-center">
      <Button
        className="py-5 px-6 rounded-2xl w-[200px] flex justify-center items-center bg-[#0000000D] hover:bg-[#0000001A] text-slate-700 font-semibold text-sm capitalize"
        size={"lg"}
      >
        Browse all
      </Button>
    </a>
  );
}

export default SectionButton;
