import { products } from "@/data/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="lg:mx-auto mx-4 max-w-6xl flex justify-center flex-wrap gap-4 p-4">
      {products.map((product) => (
        <Link href={`/produtos/${product.id}`} key={product.id}>
          <div className="w-60 h-full p-4 rounded-xl bg-dPurple-700 shadow-dream">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="font-light">{product.description}</p>
            <p className="text-lg font-semibold">
              $
              {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
