import { Product } from "@ui/models/product";
type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  return (
    <div className="max-w-48">
      <div className="relative max-w-48 w-full h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute left-0 right-0 top-0 bottom-0"
        />
      </div>
      <h2>{product.name}</h2>
    </div>
  );
};
