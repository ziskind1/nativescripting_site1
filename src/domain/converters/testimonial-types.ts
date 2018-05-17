import { Testimonial } from "../models";
import { TestimonialsJsonEdge } from "../graphql-types";

export function testimonialFromTestimonialJsonEdge(
  edge: TestimonialsJsonEdge
): Testimonial {
  const n = edge.node;
  return {
    id: n.id,
    name: n.name,
    img: n.img,
    twitter: n.twitter,
    order: n.order,
    quoteHtml: n.quoteHtml,
    titleHtml: n.titleHtml
  };
}
