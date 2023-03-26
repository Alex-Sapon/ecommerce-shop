export async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');

  return response.json();
}

export type ProductsDataType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
