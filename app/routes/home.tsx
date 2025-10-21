import type { Route } from "./+types/home";
import type { Products } from "~/modules/product/type";
import { ProductsGrid } from "~/modules/product/components/products-grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amazing Safari" },
    { name: "description", content: "Merchandise from the zoo." },
  ];
}

export async function clientLoader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Products = await response.json();

  return { products };
}

export default function HomeRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <section>
        <img src="/home-hero.jpg" alt="Home Hero" />
      </section>

      <section className="flex justify-center p-10">
        <ProductsGrid products={products} />
      </section>
    </div>
  );
}
