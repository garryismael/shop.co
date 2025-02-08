"use client";

import { useGetNewArrivalsProducts } from "@/hooks/useProduct";
import { ProductCard } from "@ui/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ui/components/ui/carousel";
import { Product } from "@ui/models/product";

const NewArrival = () => {
  const { products, isLoading, isError } = useGetNewArrivalsProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error happened. Try again later...</div>;
  }

  return (
    <section className="pt-12 px-4">
      <h1 className="title">New Arrival</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm">
        <CarouselContent>
          {products?.map((product) => (
            <CarouselItem key={product.id}>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default NewArrival;
