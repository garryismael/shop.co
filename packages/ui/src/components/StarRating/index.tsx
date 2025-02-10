import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
  rating: number;
  starColor?: string;
  starSize?: number;
};

const StarRating = ({
  rating,
  starColor = "#FFC633",
  starSize = 18,
}: Props) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const fullStars = Math.floor(roundedRating);

  const hasHalfStar = roundedRating - fullStars === 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }).map((_, index) => (
          <FaStar key={`full-${index}`} color={starColor} size={starSize} />
        ))}

        {hasHalfStar && (
          <FaStarHalf key="half" color={starColor} size={starSize} />
        )}
      </div>
      <div>
        <span>{rating}</span>
        <span>/</span>
        <span>5</span>
      </div>
    </div>
  );
};

export default StarRating;
