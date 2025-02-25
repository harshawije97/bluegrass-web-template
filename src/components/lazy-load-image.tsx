/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image, { ImageProps } from "next/image";
import React from "react";

interface LazyImageProps extends Omit<ImageProps, "src" | "blurDataURL"> {
  item: string;
  customDimensions?: {
    width?: number;
    height?: number;
  };
}

const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
</svg>
`;

const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

function LazyLoadImage({ item, ...rest }: LazyImageProps) {
  return (
    <Image
      src={item as string}
      loading="lazy"
      decoding="async"
      width={1920}
      height={1080}
      className="w-[160px] h-[160px] sm:w-[160px] lg:w-[260px] sm:h-[260px] object-cover"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
      {...rest}
    />
  );
}

export function LazyLoadImageXL({ item, ...rest }: LazyImageProps) {
  return (
    <Image
      src={item as string}
      loading="lazy"
      decoding="async"
      width={1920}
      height={1080}
      className="object-cover md:h-[610px] md:w-[600px] rounded-md w-[345px] h-[345px]"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
      {...rest}
    />
  );
}

export default LazyLoadImage;
