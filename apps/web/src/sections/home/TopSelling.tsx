"use client";

import ProductList from "@/components/ProductList";
import { useGetTopSellingProducts } from "@/hooks/useProduct";

const TopSelling = () => {
  const { products, isLoading, isError } = useGetTopSellingProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error happened. Try again later...</div>;
  }

  return (
    <ProductList
      title="Top Selling"
      products={products!}
      classNameContainer="px-2"
    />
  );
};

export default TopSelling;
