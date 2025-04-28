import { Product } from "@/utils/types";
import { formatCurrency } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

export default function ProductCard({
  product,
  reverse,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <div
      className={`mt-4 pb-8 border-b border-dWhite-200/70 flex gap-8 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}>
      <Link
        className="shadow-dream rounded-xl overflow-hidden"
        href={`/produtos/${product.id}`}>
        <Image
          className="h-72 w-96 rounded-xl object-cover duration-400 hover:scale-110 hover:-translate-y-2"
          src={product.imagePath}
          alt={product.name}
          width={400}
          height={400}
        />
      </Link>
      <div
        className={`w-2/5 flex flex-col gap-2 justify-center ${
          reverse ? "items-end text-end" : "items-start"
        }`}>
        <Link href={`/produtos/${product.id}`}>
          <h3 className="hover:drop-shadow-glow duration-150 text-3xl font-bold">
            {product.name}
          </h3>
        </Link>
        <span
          className={`text-nowrap flex gap-1 flex-${
            reverse ? "row-reverse" : "row"
          }`}>
          {product.prevPrice && (
            <span className="line-through">
              {formatCurrency(product.prevPrice)}
            </span>
          )}
          <span className="font-bold">{formatCurrency(product.price)}</span>
        </span>
        <p className="font-extralight leading-5 text-ellipsis">
          {product.description}
        </p>
        <Button reverse className="mt-4">
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}
