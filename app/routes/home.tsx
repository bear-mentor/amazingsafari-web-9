import type { Products } from "~/modules/product/type";
import type { Route } from "./+types/home";
import { formatPrice } from "~/lib/format";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

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
      <section className="flex justify-center p-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Card className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Stock: {product.stock}
                    </p>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
