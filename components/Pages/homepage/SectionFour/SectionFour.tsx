import React from 'react'
import Container from "../../../../layout/Container";
import Button from '../../../Global/UI/Button/Button';
import Image from 'next/image';

export function SectionFour({ title, desc, imgOne, imgTwo }: { title: string; desc: string;  imgOne: string; imgTwo: string}) {
  return (
    <div className="bg-[#AD0C82] py-12">
      <Container>
        <div className="lg:grid px-4 lg:px-0 lg:grid-cols-2 gap-12 lg:py-12">
          <div>
            <h1 className="font-extrabold text-3xl text-[#62E0FF]  lg:text-5xl">
              {title}
            </h1>

            <div className="mt-12 h-[300px] lg:h-[780px] rounded-lg overflow-hidden">
              <img  src={imgOne}  alt="zigah" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="space-y-12 mt-12 lg:mt-0">
            <p className="text-white leading-7 lg:leading-9 text-sm lg:text-lg">
            {desc}
            </p>

            <Button
              className="bg-[#C2D238] text-[#333] rounded-full mt-6 lg:mt-12"
              isLoading={false}
            >
              Learn more about our mission
            </Button>

            <div className="lg:h-[350px] overflow-hidden rounded-lg">
              <img src={imgTwo}   alt="zigah" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
