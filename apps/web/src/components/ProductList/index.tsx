import { ProductCard } from "@ui/components/Product";
import { Button } from "@ui/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ui/components/ui/carousel";
import { Product } from "@ui/models/product";

type Props = {
  title: string;
  products: Array<Product>;
  classNameContainer?: string;
  classNameWrapper?: string;
};

const ProductList = ({
  title,
  products,
  classNameContainer = "",
  classNameWrapper = "",
}: Props) => {
  return (
    <section className={`${classNameContainer}`}>
      <div className={`pt-12 pb-10 ${classNameWrapper}`}>
        <h1 className="title">{title}</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full pt-10 pb-6">
          <CarouselContent className="grid auto-cols-[60%] grid-flow-col auto-rows-fr">
            {products?.map((product) => (
              <CarouselItem key={product.id} className="basis-3/5">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Button
          variant="outline"
          className="w-full rounded-full font-satoshi-medium text-sm !py-4">
          View All
        </Button>
      </div>
    </section>
  );
};

export default ProductList;
