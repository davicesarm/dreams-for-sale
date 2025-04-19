import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

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
            <div
              className={`mt-4 pb-8 border-b border-dWhite-200/70 flex gap-8 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              key={product.id}>
              <Image
                className="shadow-dream h-72 w-96 rounded-xl object-cover"
                src={product.imagePath}
                alt={product.name}
                width={400}
                height={400}
              />
              <div
                className={`w-2/5 flex flex-col gap-2 justify-center ${
                  idx % 2 === 0 ? "items-start" : "items-end text-end"
                }`}>
                <h3 className="text-3xl font-bold">{product.name}</h3>
                <span
                  className={`text-nowrap flex gap-1 flex-${
                    idx % 2 === 0 ? "row" : "row-reverse"
                  }`}>
                  <s>
                    $
                    {product.prevPrice?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </s>
                  <b>
                    $
                    {product.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </b>
                </span>
                <p className="font-light leading-5 text-ellipsis">
                  {product.description}
                </p>
                <Button reverse className="mt-4">
                  Adicionar ao carrinho
                </Button>
              </div>
            </div>
          );
        })}
        <Link className="mt-4" href="/produtos">
          <Button>Ver mais sonhos</Button>
        </Link>
      </div>
    </section>
  );
}
