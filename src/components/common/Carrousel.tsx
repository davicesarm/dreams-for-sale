"use client";

import ProductCatalogItem from "@/components/Catalog/ProductCatalogItem";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/utils/types";

export default function Carousel({
  products,
}: Readonly<{
  products: Product[];
}>) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Referência para cada MovieCard
  const [index, setIndex] = useState<number>(0);

  const getVisibleCount = () => {
    if (!scrollContainerRef.current || !cardRefs.current[0]) return 1;
    const containerWidth = scrollContainerRef.current.clientWidth;
    const cardWidth = cardRefs.current[0].offsetWidth;
    return Math.max(Math.floor(containerWidth / cardWidth), 1); // Pelo menos 1
  };

  const scrollToElement = (index: number) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleScrollLeft = () => {
    setIndex((prevIndex) => {
      const visibleCount = getVisibleCount();
      const newIndex =
        (prevIndex - visibleCount + products.length) % products.length;

      scrollToElement(newIndex);
      return newIndex;
    });
  };

  const handleScrollRight = () => {
    setIndex((prevIndex) => {
      const visibleCount = getVisibleCount();
      const newIndex = (prevIndex + visibleCount) % products.length;

      scrollToElement(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    console.log(index);
    console.log(products.length);
  }, [index, products.length]);

  return (
    <>
      <div className="relative flex items-center">
        <button
          onClick={handleScrollLeft}
          className="hover:cursor-pointer p-1 hover:scale-110 active:scale-100 transition ease duration-75 border border-transparent hover:border-dWhite-200 absolute z-10 backdrop-blur top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-dPurple-700/50">
          <MdKeyboardArrowLeft className="text-4xl" />
        </button>
        <div ref={scrollContainerRef} className="overflow-hidden flex">
          <div className="flex gap-4">
            {products.map((product, index) => {
              return (
                <div
                  key={product.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}>
                  <ProductCatalogItem product={product} />
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={handleScrollRight}
          className="hover:cursor-pointer p-1 hover:scale-110 active:scale-100 transition ease duration-75 border border-transparent hover:border-dWhite-200 absolute z-10 backdrop-blur right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-dPurple-700/50">
          <MdKeyboardArrowRight className="text-4xl" />
        </button>
      </div>
    </>
  );
}
