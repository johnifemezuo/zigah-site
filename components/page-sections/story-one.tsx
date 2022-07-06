import Image from 'next/image';
import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { StoryOne as IStoryOne } from '../../types/stories';

interface StoryOneSectionProps {
  storyOnes: IStoryOne[];
}

const StoryOne: FC<StoryOneSectionProps> = ({
  storyOnes,
}: StoryOneSectionProps) => (
  <section className="parent-relative my-5">
    <div className="container parent-relative my-5">
      <div className="my-3 d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="d-flex col-sm-2 mb-4">
            <img
              src="/assets/ziga-logo.png"
              alt="logo"
              width="100%"
              height="100%"
              sizes="100vw"
            />
          </div>
          <small
            className="secondary mb-3 divider-btw"
            style={{ fontWeight: '400', fontSize: '0.85rem' }}
          >
            WE BUILT THIS FOR YOU
          </small>
          <h2 className="fw-bold primary mb-5">
            Who is ziga
            <span style={{ fontWeight: '200' }}> &trade; </span>
            for?
          </h2>
        </div>

        <div className="d-lg-flex d-md-flex d-sm-block align-items-start gap-4 my-5">
          <div className="col-sm-5">
            <Image
              src={storyOnes[0].imageOne.url}
              alt="woman holding ipad"
              width="100%"
              height="100%"
              sizes="100vw"
              quality={100}
              objectFit="cover"
            />
          </div>

          <div className="mt-2">
            <h1 className="primary-outline display-4 fw-bold negative-70">
              {storyOnes[0].title}
            </h1>
            <small className="secondary">{storyOnes[0].description}</small>
            <div className="mb-4" style={{ maxWidth: '400px' }}>
              <hr />
            </div>
            <div className="d-lg-flex d-sm-block align-items-start gap-5 mt-2 mb-3">
              <div className="col-lg-6 col-sm-6 col-md-12 primary line-height">
                {ReactHtmlParser(storyOnes[0].content.html)}
              </div>
              <div className="col-lg-5 col-sm-5 col-md-12 primary line-height">
                {ReactHtmlParser(storyOnes[0].contentTwo.html)}
              </div>
            </div>
            <div className="rounded rounded-50">
              <Image
                src={storyOnes[0].imageTwo.url}
                alt="woman holding ipad"
                width="100%"
                height="30%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swirly-two">
      <img src="/assets/plain-swirl.png" alt="swirly" width="100%" />
    </div>

    <div className="story-one-blob">
      <img src="/assets/swirly.png" alt="swirly" style={{ maxWidth: '350px' }} />
    </div>
  </section>
);

export default StoryOne;
