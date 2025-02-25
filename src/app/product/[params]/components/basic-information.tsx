"use client";
import React from "react";
import parse from "html-react-parser";

interface BasicInformationProps {
  params: string;
}

function BasicInformation({ params }: BasicInformationProps) {
  return (
    <div className="w-full h-fit flex flex-col text-sm pl-4">
      <h2 className="text-slate-600 font-semibold mb-6 text-lg">Basic Information</h2>
      <section className="ul-span">{parse(params)}</section>
    </div>
  );
}

export default BasicInformation;
