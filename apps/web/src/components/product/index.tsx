import Image from "next/image";
import { useState } from "react";
import { ProductSize } from "@ui/models/product";
import { Button } from "@ui/components/ui/button";

type Props = {
  name: string;
  images: string[];
};
export const ProductSwitcher = ({ name, images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-y-3">
      <div className="bg-light-grayish rounded-[20px] overflow-hidden">
        <div className="relative h-full min-h-72 max-h-72">
          <Image
            src={images[currentIndex]}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`${i === currentIndex ? "ring ring-black ring-offset-0" : ""} bg-light-grayish rounded-[20px] overflow-hidden`}>
            <div className="relative w-28 h-24 overflow-hidden">
              <Image src={image} fill alt={name} className="object-cover" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

type SizeProps = {
  sizes: ProductSize[];
  handleSizeChange: (index: number) => void;
};

export const ProductSizePicker = ({ sizes, handleSizeChange }: SizeProps) => {
  const [currentSize, setCurrentSize] = useState(0);
  const handleClick = (index: number) => {
    setCurrentSize(index);
    handleSizeChange(index);
  };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {sizes.map((size, index) => (
        <Button
          key={size.id}
          variant={currentSize === index ? "default" : "outline"}
          onClick={() => handleClick(index)}
          className={`rounded-[62px] ${currentSize === index ? "font-satoshi-medium font-medium" : "paragraph"}`}>
          {size.name}
        </Button>
      ))}
    </div>
  );
};
