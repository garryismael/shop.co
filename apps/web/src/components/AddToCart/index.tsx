import { Button } from "@ui/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Props = {
  className?: string;
  setCounter: (value: number) => void;
};

const AddToCart = ({ className = "", setCounter }: Props) => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count > 0) {
      const newValue = count - 1;
      setCount(newValue);
      setCounter(newValue);
    }
  };

  const handlePlus = () => {
    const newValue = count + 1;
    setCount(newValue);
    setCounter(newValue);
  };

  return (
    <div className={`grid grid-cols-5 items-center gap-3 ${className}`}>
      <div className="bg-light-grayish rounded-[62px] col-span-2 py-3 px-4 flex items-center gap-4">
        <Minus onClick={handleMinus} size={20} />
        <span className="paragraph">{count}</span>
        <Plus onClick={handlePlus} size={20} />
      </div>
      <Button className="!py-3 rounded-[62px] w-full col-span-3">
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCart;
