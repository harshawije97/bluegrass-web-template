"use client";
import React from "react";
import CarouselContent from "./ui/carousel-content";
import { Card, Carousel } from "./ui/apple-card-carousel";

const data = [
  {
    category: "iPhone 16 Pro Max",
    title: "Hello Apple Intelligence",
    src: "https://i.ibb.co/mz0S7JL/iphone-16-pr-mx.png",
    content: <CarouselContent />,
  },
  {
    category: "iWatch Series 10",
    title: "Enhance your productivity.",
    src: "https://i.ibb.co/27qjKLw/iwatch-se-10.jpg",
    content: <CarouselContent />,
  },
  {
    category: "iPhone 16 Plus",
    title: "Launching the new Apple Vision Pro.",
    src: "https://i.ibb.co/J3LvnYj/iphone-16-plus.jpg",
    content: <CarouselContent />,
  },

  {
    category: "iPhone 16",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://i.ibb.co/6s9M9YL/iphone-16.jpg",
    content: <CarouselContent />,
  },
  {
    category: "AirPods 4",
    title: "Photography just got better.",
    src: "https://i.ibb.co/9VfgBWX/airpods-4.jpg",
    content: <CarouselContent />,
  },
  {
    category: "iPhone 16 Pro",
    title: "Hiring for a Staff Software Engineer",
    src: "https://i.ibb.co/C92MJ4z/iphone-16-pro.jpg",
    content: <CarouselContent />,
  },
];

function NewArrivalsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

export default NewArrivalsCarousel;
