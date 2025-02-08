import Navbar from "@/components/NavBar";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/sections/home/HeroSection";
import NewArrival from "@/sections/home/NewArrival";
import { getNewArrivals } from "@/services/product";
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

  return (
    <>
      <TopHeader />
      <Navbar />
      <HeroSection />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewArrival />
      </HydrationBoundary>
    </>
  );
}
