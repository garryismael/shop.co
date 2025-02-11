import { getTestimonials } from "@/services/testimonial";
import { useQuery } from "@tanstack/react-query";
import { CarouselApi } from "@ui/components/ui/carousel";
import { useEffect, useState } from "react";

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

export const useCarouselNavigation = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const updateScrollStates = () => {
    if (carouselApi) {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    }
  };

  const handlePrevious = () => {
    if (!carouselApi) return;
    carouselApi.scrollPrev();
    updateScrollStates();
  };

  const handleNext = () => {
    if (!carouselApi) return;
    carouselApi.scrollNext();
    updateScrollStates();
  };

  useEffect(() => {
    if (carouselApi) {
      updateScrollStates();
      carouselApi.on("select", updateScrollStates);
      return () => {
        carouselApi.off("select", updateScrollStates);
      };
    }
  }, [carouselApi]);

  return {
    carouselApi,
    setCarouselApi,
    canScrollNext,
    canScrollPrev,
    handlePrevious,
    handleNext,
  };
};
