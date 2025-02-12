export interface ProductSize {
  id: string;
  name: string;
}
export interface ProductColor {
  id: string;
  value: string;
  images: string[];
  sizes?: Array<ProductSize>;
}
export interface Product {
  id: string;
  name: string;
  description?: string;
  image: string;
  review: number;
  price: number;
  discount: number;
  colors?: Array<ProductColor>;
}
