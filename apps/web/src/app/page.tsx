import Navbar from "@/components/NavBar";
import TopHeader from "@/components/TopHeader";
import BrowseBy from "@/sections/home/BrowseBy";
import HeroSection from "@/sections/home/HeroSection";
import NewArrival from "@/sections/home/NewArrival";
import TopSelling from "@/sections/home/TopSelling";
import { getNewArrivals, getTopSelling } from "@/services/product";
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
    </>
  );
}
