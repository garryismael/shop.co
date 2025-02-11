import request from "@/lib/axios";
import { Testimonial } from "@ui/models";

export const getTestimonials = async () => {
  const response = await request.get<{ data: Array<Testimonial> }>(
    "/data/testimonials.json"
  );
  return response.data.data;
};
