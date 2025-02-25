"use client";

import React from "react";

interface RatingsCardProps {
  number: number;
}

function RatingsCard({ number }: RatingsCardProps) {
  return (
    <div className="w-fit h-full flex gap-x-4 bg-slate-50 rounded-full border border-slate-200 py-1 px-2.5">
      <p className="text-slate-500 text-xs">{number.toPrecision(2)}</p>
    </div>
  );
}

export default RatingsCard;
