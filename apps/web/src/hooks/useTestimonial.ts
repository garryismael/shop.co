import { getTestimonials } from "@/services/testimonial";
import { useQuery } from "@tanstack/react-query";

export const useGetTestimonials = () => {
  const {
    data: testimonials,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-testimonials"],
    queryFn: () => getTestimonials(),
  });

  return { testimonials, isLoading, isError };
};
