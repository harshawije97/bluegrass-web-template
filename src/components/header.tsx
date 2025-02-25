"use client";

import React from "react";

function Header() {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full h-[360px] md:h-screen flex opacity-75">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/videos/hero-vid.mp4"
            type="video/mp4"
            media="(min-width: 360px)"
            className="w-full"
          />
        </video>
      </div>
    </div>
  );
}

export default Header;
