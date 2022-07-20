import Image from 'next/image';
import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { StoryTwo as IStoryTwo } from '../../types/stories';

interface StoryTwoSectionProps {
  storyTwo: IStoryTwo[];
}

const StoryTwo: FC<StoryTwoSectionProps> = ({
  storyTwo,
}: StoryTwoSectionProps) => (
  <section className="parent-relative mb-5 pb-4">
    <div className="container my-5 py-5">
      <div className="my-5 py-5">
        <h1 className="primary-outline display-4 fw-bold">{storyTwo[0].title}</h1>
        <small className="secondary">{storyTwo[0].description}</small>

        <div className="mb-4" style={{ maxWidth: '340px' }}>
          <hr />
        </div>
        <div className="d-xl-flex d-lg-flex d-md-flex d-sm-block align-items-start gap-5 mt-2 mb-3">
          <div className="col-sm-6 primary line-height">
            {ReactHtmlParser(storyTwo[0].infoOne.html)}
          </div>
          <div className="col-sm-5 primary line-height">
            {ReactHtmlParser(storyTwo[0].infoTwo.html)}
          </div>
        </div>
        <div className="d-xl-flex d-md-flex d-sm-block align-items-center gap-2 my-5">
          <div className="col-sm-4 mt-2">
            <Image
              src={storyTwo[0].imageOne.url}
              alt="woman holding ipad"
              width="100%"
              height="100%"
              sizes="50vw"
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="col-sm-4 mt-2">
            <Image
              src={storyTwo[0].imageTwo.url}
              alt="woman holding ipad"
              width="100%"
              height="100%"
              sizes="50vw"
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="col-sm-4 mt-2">
            <Image
              src={storyTwo[0].imageThree.url}
              alt="woman holding ipad"
              width="100%"
              height="100%"
              sizes="50vw"
              quality={100}
              objectFit="cover"
            />
          </div>
        </div>

        <img className="second-story-blob" src="/assets/story-two-blob.png" alt="story" />
      </div>

      <img className="second-story-spiral" src="/assets/second-story-spiral.png" alt="story" />
    </div>
  </section>
);

export default StoryTwo;
