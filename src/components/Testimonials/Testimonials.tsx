import * as React from "react";

import TestimonialComponent from "./Testimonial";
import { Testimonial } from "../../domain/models";

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.StatelessComponent<TestimonialsProps> = (
  props: TestimonialsProps
) => {
  const testimonialsHtml = props.testimonials.map((t, i) => {
    return <TestimonialComponent key={i} testimonial={t} />;
  });

  return (
    <div className="wrapper">
      <div className="quotes quotes--learning grid-3">{testimonialsHtml}</div>
    </div>
  );
};

export default Testimonials;
