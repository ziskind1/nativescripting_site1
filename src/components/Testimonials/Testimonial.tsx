import * as React from "react";
import { Testimonial } from "../../domain/models";

export interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialComponent: React.StatelessComponent<TestimonialProps> = (
  props: TestimonialProps
) => {
  const imgUrl = `/img/people/${props.testimonial.img}`;
  const twitterUrl = `https://twitter.com/${props.testimonial.twitter}`;

  return (
    <div className="quotes__item quotes__item--small">
      <h3 className="quotes__item-quote">{props.testimonial.quoteHtml}</h3>
      <div className="quotes__author">
        <img className="quotes__author-img" src={imgUrl} alt="" />
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
