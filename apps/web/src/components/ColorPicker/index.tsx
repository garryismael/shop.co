import { ProductColor } from "@ui/models/product";
import { Check } from "lucide-react";
import React, { useState } from "react";

type Props = {
  className?: string;
  colors: ProductColor[];
  handleChange: (id: number) => void;
};

const ColorPicker = ({ colors, handleChange, className = "" }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isLightColor = (color: string) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 180;
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    handleChange(index);
  };
  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      {colors.map((color, index) => {
        const isLight = isLightColor(color.value);
        return (
          <button
            key={color.id}
            className={`size-10 flex items-center justify-center rounded-full ${isLight ? "border-2 border-gray-800" : ""} ${isLight ? "shadow-md" : ""}`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleClick(index)}>
            {index === currentIndex && (
              <Check size={16} color={isLight ? "#000" : "#FFF"} />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ColorPicker;
