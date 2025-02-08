import { getNewArrivals } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useGetNewArrivalsProducts = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["get-new-arrivals-products"],
    queryFn: () => getNewArrivals(),
  });

  return { products, isLoading , isError};
};
