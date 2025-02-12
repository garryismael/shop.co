import ProductDetail from "@/sections/product-detail";
import { getProductDetail } from "@/services/product";
import { QueryClient } from "@tanstack/react-query";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-product-detail"],
    queryFn: () => getProductDetail(id),
  });
  return (
    <>
      <ProductDetail id={id} />
    </>
  );
};

export default Page;
