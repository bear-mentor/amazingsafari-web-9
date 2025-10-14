import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

function App() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`http://localhost:3000/products`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading products...</div>;

  return (
    <>
      <h1>Amazing Safari</h1>
      <ul>
        {products.map((product: any) => {
          return (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} width={200} />
              <h2>{product.name}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
