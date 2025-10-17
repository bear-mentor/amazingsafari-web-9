import type { Products } from "~/modules/product/type";
import type { Route } from "./+types/home";

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

export default function Home({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <h1>Amazing Safari</h1>

      <ul className="grid grid-cols-3">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="size-52"
              />
              <h2>{product.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
