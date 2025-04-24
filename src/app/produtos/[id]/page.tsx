"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import ProductItem from "@/components/ProductItem";

export default function ProductPage() {
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
    <div className="flex justify-center mt-8">
      <ProductItem product={product} />
    </div>
  );
}
