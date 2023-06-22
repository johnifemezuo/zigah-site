import { IReviews } from "../../../../base/interface/graph.interface";
import Container from "../../../../layout/Container";
import { ReviewSlider } from "../../../Global/Slider/ReviewSlider";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import React from "react";


export function CustomerReviews({ reviews }: { reviews: {customerReviews:IReviews[]} }) {

  return (
    <div>
      <Container>
        <div className=" gap-12 lg:gap-20 bg-light-gray rounded-xl p-4 lg:p-12 my-12 grid lg:grid-cols-2">
          <div className="mt-12 lg:mt-20 space-y-8 ">
            <BodyHeader
              {...{
                subHeader: "Customer Revew",
                header: "What Our Customers Think of Zigah.",
              }}
            />
          </div>

          <div className="w-full overflow-hidden">
            <ReviewSlider reviews={reviews?.customerReviews} />
          </div>
        </div>
      </Container>
    </div>
  );
}
