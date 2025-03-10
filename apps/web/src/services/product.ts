import request from "@/lib/axios";
import { Product } from "@ui/models/product";

export const getNewArrivals = async () => {
  const response = await request.get<{ data: Array<Product> }>(
    "/data/new-arrivals.json"
  );
  return response.data.data;
};

export const getTopSelling = async () => {
  const response = await request.get<{ data: Array<Product> }>(
    "/data/top-selling.json"
  );
  return response.data.data;
};

export const getProductDetail = async (id: string) => {
  console.log(id);
  const response = await request.get<{ data: Product | undefined }>(
    "/data/product.json"
  );
  return response.data.data;
};
