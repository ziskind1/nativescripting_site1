import * as React from "react";
import { Testimonial } from "../../domain/models";
import { getTestimonialImgSrc } from "../../utils/urls";

export interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialComponent: React.StatelessComponent<TestimonialProps> = (
  props: TestimonialProps
) => {
  //const imgUrl = `/img/people/${props.testimonial.img}`;
  const imgUrl = getTestimonialImgSrc(props.testimonial.img, 48, 'jpg');

  const twitterUrl = `https://twitter.com/${props.testimonial.twitter}`;

  return (
    <div className="quotes__item quotes__item--small">
      <h3 className="quotes__item-quote">{props.testimonial.quoteHtml}</h3>
      <div className="quotes__author">
        <img alt={props.testimonial.name} className="quotes__author-img" src={imgUrl} />
        <div>
          <a target="_blank" href={twitterUrl}>
            {props.testimonial.name}
          </a>
          <p>{props.testimonial.titleHtml}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
