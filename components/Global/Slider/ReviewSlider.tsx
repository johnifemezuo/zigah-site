import { IReviews } from "../../../base/interface/graph.interface";
import { Carousel, CarouselItem } from "./Carousel/Carousel";
import SliderCard from "./SliderCard";
import React from "react";

export function ReviewSlider({reviews}:{reviews:IReviews[]}) {
  return (
    <Carousel>
      {reviews?.map((review: IReviews, i: number) => (
        <CarouselItem width="" key={i}>
          <SliderCard
            desc={review.review}
            role={review.role}
            image={review?.userImg?.url}
            title={review.name}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
}
