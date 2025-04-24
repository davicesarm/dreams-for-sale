import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { formatCurrency } from "@/utils/utils";
import ProductItem from "./ProductItem";

export default function OnSale() {
  const dreamsOnSale = products.filter((product) => product.prevPrice != null);

  return (
    <section className="w-full flex justify-center mt-10 mb-20">
      <div className="max-w-5xl mx-4 flex flex-col items-center gap-5 ">
        <h2 className="text-3xl font-bold border-b border-dWhite-200/70 w-full text-center pb-8">
          Sonhos em liquidação
        </h2>
        {dreamsOnSale.map((product, idx) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              reverse={idx % 2 !== 0}
            />
          );
        })}
        <Link className="mt-4" href="/produtos">
          <Button>Ver mais sonhos</Button>
        </Link>
      </div>
    </section>
  );
}
