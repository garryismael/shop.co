"use client";

import TestimonialCard from "@/components/Testimonial";
import {
  useCarouselNavigation,
  useGetTestimonials,
} from "@/hooks/useTestimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@ui/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  const { testimonials, isLoading, isError } = useGetTestimonials();
  const {
    setCarouselApi,
    canScrollNext,
    canScrollPrev,
    handlePrevious,
    handleNext,
  } = useCarouselNavigation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error happened. Try again later...</div>;
  }
  return (
    <section className="pt-12 pb-8">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <h1 className="title !text-left">OUR HAPPY CUSTOMERS</h1>
          <div className="flex items-center gap-4 self-end">
            <button
              onClick={handlePrevious}
              disabled={!canScrollPrev}
              className="cursor-pointer">
              <ArrowLeft size={24} color={canScrollPrev ? "#000" : "#808080"} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollNext}
              className="cursor-pointer">
              <ArrowRight
                size={24}
                color={canScrollNext ? "#000" : "#808080"}
              />
            </button>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setCarouselApi}
          className="w-full pt-10 pb-6">
          <CarouselContent className="grid auto-cols-[100%] grid-flow-col auto-rows-fr">
            {testimonials?.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
