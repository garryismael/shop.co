"use client";

import AddToCart from "@/components/AddToCart";
import ColorPicker from "@/components/ColorPicker";
import { ProductSizePicker, ProductSwitcher } from "@/components/product";
import { useGetProductDetail } from "@/hooks/useProduct";
import { ProductPrice } from "@ui/components/Product";
import Rating from "@ui/components/Rating";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ui/components/ui/breadcrumb";
import Link from "next/link";
import { useState } from "react";

type Props = {
  id: string;
};
const ProductDetail = ({ id }: Props) => {
  const { product, isLoading, isError } = useGetProductDetail(id);
  const [currentColor, setCurrentColor] = useState<number>(0);
  const [currentSize, setCurrentSize] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleColorChange = (index: number) => {
    setCurrentColor(index);
  };

  const handleSizeChange = (index: number) => {
    console.log(currentSize);
    setCurrentSize(index);
  };

  if (isLoading) {
    return <div className="pt-32">Loading...</div>;
  }

  if (isError) {
    return <div className="pt-32">Error happened. Try again later...</div>;
  }

  if (!product) {
    return <div className="pt-32">Product not found</div>;
  }

  return (
    <section className="pt-32">
      <div className="px-4">
        <Breadcrumb className="pb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/components">Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-black">Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {product.colors && product.colors.length > 1 && (
          <ProductSwitcher
            name={product.name}
            images={product.colors[0].images}
          />
        )}
        <h1 className="text-black font-integral-cf-bold font-bold text-2xl leading-7 pt-5 text-pretty">
          {product.name}
        </h1>
        <Rating rating={product.review} className="pt-3" />
        <ProductPrice
          price={product.price}
          discount={product.discount}
          className="pt-3"
        />
        <p className="paragraph pt-5 pb-6 border-b border-black/10">
          {product.description}
        </p>
        {product.colors && product.colors.length > 1 && (
          <>
            <div className="pt-6 pb-6 border-b border-black/10">
              <p className="paragraph">Select Colors</p>
              <ColorPicker
                colors={product.colors}
                handleChange={handleColorChange}
                className="pt-4"
              />
            </div>
            {product.colors[currentColor].sizes && (
              <div className="pt-6 pb-6 border-b border-black/10">
                <p className="paragraph pb-4">Choose Size</p>
                <ProductSizePicker
                  sizes={product.colors[currentColor].sizes}
                  handleSizeChange={handleSizeChange}
                />
              </div>
            )}
          </>
        )}
        <AddToCart setCounter={setCounter} className="pt-6"/>
      </div>
    </section>
  );
};

export default ProductDetail;
