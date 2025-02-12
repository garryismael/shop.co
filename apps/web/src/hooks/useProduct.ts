import {
  getNewArrivals,
  getProductDetail,
  getTopSelling,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useGetNewArrivalsProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-new-arrivals-products"],
    queryFn: () => getNewArrivals(),
  });

  return { products, isLoading, isError };
};

export const useGetTopSellingProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-top-selling-products"],
    queryFn: () => getTopSelling(),
  });

  return { products, isLoading, isError };
};

export const useGetProductDetail = (id: string) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-product-detail", id],
    queryFn: () => getProductDetail(id),
  });

  return { product, isLoading, isError };
};
