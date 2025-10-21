import type { Products } from "~/modules/product/type";
import type { Route } from "./+types/products";
import { ProductsGrid } from "~/modules/product/components/products-grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products - Amazing Safari" },
    { name: "description", content: "All products from Amazing Safari." },
  ];
}

export async function clientLoader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Products = await response.json();

  return { products };
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <section className="flex justify-center p-10">
        <ProductsGrid products={products} />
      </section>
    </div>
  );
}
