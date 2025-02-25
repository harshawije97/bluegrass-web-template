/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  content: string;
};

function ThumbsButton({ selected, index, onClick, content }: PropType) {
  return (
    <>
      <div
        className={"flex flex-shrink-0 flex-grow-0 md:basis-[22%] basis-[25%] min-w-0 pl-3".concat(
          selected
            ? "flex-shrink-0 flex-grow-0 md:basis-[22%] basis-[15%] min-w-0 pl-3 opacity-50"
            : ""
        )}
      >
        <button
          onClick={onClick}
          type="button"
          className="rounded-lg appearance-none bg-transparent touch-manipulation inline-flex no-underline border-0 m-0 p-0 cursor-pointer shadow-lg text-slate-300 text-base flex justify-center items-center w-full h-[6rem]"
        >
          <Image
            src={content}
            alt="main-image"
            width={1920}
            height={1080}
            className="object-cover md:h-[120px] md:w-full rounded-md w-full h-[96px]"
            placeholder="blur"
            blurDataURL={content}
            decoding="async"
          />
        </button>
      </div>
    </>
  );
}

export default ThumbsButton;
