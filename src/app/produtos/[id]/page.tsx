"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-4 text-lg">{product.id}</p>
    </div>
  );
}
