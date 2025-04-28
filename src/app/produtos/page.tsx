import { products } from "@/data/products";
import ProductCatalogItem from "@/components/Catalog/ProductCatalogItem";

export default function Products() {
  return (
    <div className="lg:mx-auto mx-4 max-w-6xl flex justify-center flex-wrap gap-6 p-4">
      {products.map((product) => ProductCatalogItem({ product }))}
    </div>
  );
}
