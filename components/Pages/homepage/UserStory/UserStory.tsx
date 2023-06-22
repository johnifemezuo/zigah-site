import React from "react";
import Container from "../../../../layout/Container";
import { NeedUserStoryInterface } from "../../../../util/interface/userStoryInterface";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import UserStoryOne from "./UserStoryOne";
import UserStorySecond from "./UserStorySecond";

function UserStory({ userStory }: any) {
  if (!userStory) {
    return <p>Loading.</p>;
  }
  const firstStory: NeedUserStoryInterface = userStory[0].attributes;
  const secondStory: NeedUserStoryInterface = userStory[1].attributes;

  return (
    <div className="py-20 px-6 lg:px-0">
      <Container>
        <div>
          <BodyHeader header="Who is Zigah for?" subHeader="We Built For you" />
        </div>
        <div className="space-y-20 lg:mt-[12vh] lg:space-y-36">
          <UserStoryOne userData={firstStory} />
          <UserStorySecond userData={secondStory} />
        </div>
      </Container>
    </div>
  );
}

export default UserStory;
