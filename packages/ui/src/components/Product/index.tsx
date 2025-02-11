import { Product } from "@ui/models/product";
import Rating from "../Rating";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const price = product.price - (product.price * product.discount) / 100;
  return (
    <div className="flex flex-col justify-between h-full py-1.5 relative z-0">
      <div className="relative z-0 flex flex-col items-center justify-center w-full h-52 lg:h-80 overflow-hidden rounded-xl bg-light-grayish">
        <img
          src={product.image}
          alt={product.name}
          className="absolute left-1/2 right-0 top-1/2 -translate-1/2 bottom-0 rounded-xl object-fill"
        />
      </div>
      <h2 className="font-bold capitalize text-base font-satoshi-bold py-1.5">
        {product.name}
      </h2>
      <Rating rating={product.review} />
      <div className="flex items-center gap-1.5 pt-1.5">
        <span className="text-xl font-satoshi-bold font-bold text-black">
          ${price}
        </span>
        {product.discount > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="text-black/40 font-satoshi-bold font-bold text-xl line-through">
              ${product.price}
            </span>
            <span className="bg-red-orange/10 text-red-orange px-2 py-0.5 text-xs rounded-2xl">
              {"-"}
              {product.discount}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
