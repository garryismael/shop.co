import StarRating from "@ui/components/StarRating";
import { Testimonial } from "@ui/models";
import { Check, CircleCheck } from "lucide-react";
import React from "react";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  const fullName = testimonial.lastName
    ? `${testimonial.firstName} ${testimonial.lastName.charAt(0).toUpperCase()}.`
    : testimonial.firstName;

  return (
    <div className="p-6 border border-black/10 rounded-[20px]">
      <StarRating rating={testimonial.rating} />
      <div className="mt-3 flex items-center gap-1">
        <h3 className="text-base leading-[22px] text-black font-satoshi-bold font-bold">
          {fullName}
        </h3>
        <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#01AB31]">
          <Check color="white" size={12} />
        </div>
      </div>
      <p className="mt-2 text-black/60 text-xs font-satoshi-regular leading-5">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </div>
  );
};

export default TestimonialCard;
