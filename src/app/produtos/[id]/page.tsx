"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/OnSale/ProductCard";
import Carousel from "@/components/common/Carrousel";

export default function Product() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="flex justify-center mt-8">
        <h1 className="text-4xl font-bold">Produto não encontrado :(</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="max-w-5xl flex flex-col gap-8">
        <ProductCard product={product} />
        <div className="w-full">
          <h1 className="font-bold text-2xl mb-4">Outros produtos</h1>
          <Carousel products={products.filter((p) => p.id !== product.id)} />
        </div>
      </div>
    </div>
  );
}
