"use client";
import React from "react";

interface ItemsStorageProps {
  title: string;
}

function ItemsStorage({ title }: ItemsStorageProps) {
  return (
    <span className="flex flex-col w-full items-start justify-center gap-2 border px-4 py-3 rounded-lg">
      <h2 className="font-semibold text-lg text-slate-500">{title}</h2>
    </span>
  );
}

export default ItemsStorage;
