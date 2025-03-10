"use client";

import ProductList from "@/components/ProductList";
import { useGetNewArrivalsProducts } from "@/hooks/useProduct";

const NewArrival = () => {
  const { products, isLoading, isError } = useGetNewArrivalsProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error happened. Try again later...</div>;
  }

  return (
    <ProductList
      title="New Arrival"
      products={products!}
      classNameContainer="px-2"
      classNameWrapper="border-b border-b-black/10"
    />
  );
};

export default NewArrival;
