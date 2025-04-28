import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { formatCurrency } from "@/utils/utils";
import { Product } from "@/utils/types";
import Button from "@/components/common/Button";

export default function ProductCatalogItem({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="border border-dWhite-200/10 flex flex-col items-center text-center w-60 h-full rounded-xl bg-dPurple-700 shadow-dream">
      <Link
        className="border-b border-dWhite-200/10 rounded-t-xl overflow-hidden"
        href={`/produtos/${product.id}`}>
        <Image
          className="rounded-t-xl object-cover duration-400 hover:scale-110 hover:-translate-y-2"
          src={product.imagePath}
          alt={product.name}
          width={400}
          height={400}
        />
      </Link>
      <div className="p-3">
        <Link href={`/produtos/${product.id}`} key={product.id}>
          <h2 className="hover:underline font-semibold text-lg">
            {product.name}
          </h2>
        </Link>

        <div className="my-2">
          <span className="flex justify-center gap-0.5 text-sm">
            {Array.from({ length: product.rating }).map((_, i) => {
              return <FaStar key={i} className="text-yellow-500" />;
            })}
            {product.rating % 1 !== 0 && (
              <FaStarHalfAlt className="text-yellow-500" />
            )}
            {Array.from({ length: 5 - product.rating }).map((_, i) => {
              return <FaRegStar key={i} className="text-yellow-500" />;
            })}
          </span>
          <p className="text-xs font-semibold">{product.reviews} reviews</p>
        </div>
        <p className="text-xl font-bold">{formatCurrency(product.price)}</p>
      </div>
      <Button reverse className="rounded-xl w-full">
        Adicionar ao carrinho
      </Button>
    </div>
  );
}
