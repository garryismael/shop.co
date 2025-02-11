import Navbar from "@/components/NavBar";
import TopHeader from "@/components/TopHeader";
import BrowseBy from "@/sections/home/BrowseBy";
import HeroSection from "@/sections/home/HeroSection";
import NewArrival from "@/sections/home/NewArrival";
import SubscribeNewsletters from "@/sections/home/SubscribeNewsletters";
import TestimonialSection from "@/sections/home/Testimonial";
import TopSelling from "@/sections/home/TopSelling";
import { getNewArrivals, getTopSelling } from "@/services/product";
import { getTestimonials } from "@/services/testimonial";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-new-arrivals-products"],
    queryFn: getNewArrivals,
  });

  await queryClient.prefetchQuery({
    queryKey: ["get-top-selling-products"],
    queryFn: getTopSelling,
  });

  await queryClient.prefetchQuery({
    queryKey: ["get-testimonials"],
    queryFn: getTestimonials
  })

  return (
    <>
      <TopHeader />
      <Navbar />
      <HeroSection />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewArrival />
        <TopSelling />
      </HydrationBoundary>
      <BrowseBy />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TestimonialSection />
      </HydrationBoundary>
      <SubscribeNewsletters />
    </>
  );
}
