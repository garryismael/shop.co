import StarRating from "../StarRating";

type Props = {
  rating: number;
  starColor?: string;
  starSize?: number;
  className?: string;
};

const Rating = ({
  rating,
  starColor = "#FFC633",
  starSize = 18,
  className = "",
}: Props) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <StarRating rating={rating} starColor={starColor} starSize={starSize} />
      <div>
        <span>{rating}</span>
        <span>/</span>
        <span>5</span>
      </div>
    </div>
  );
};

export default Rating;
