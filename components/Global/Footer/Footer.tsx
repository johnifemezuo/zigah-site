import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../../layout/Container";
import { StyledFollowIcons } from "../../../styles/styled-components/Styled-component";
import FacebookIcon from "../Icons/svg/FacebookIcon";
import InstagramIcon from "../Icons/svg/InstagramIcon";
import LinkedIn from "../Icons/svg/LinkedIn";
import TwitterIcon from "../Icons/svg/TwitterIcon";
import {
  StyledFooterHeader,
  StyledFooterLinks,
} from "./style/StyledFooterElements";
import { useQuery } from "@apollo/client";
import { COMPANY_LOCATION, COMPANY_SOCIALS, HOME_QUERY } from "../../../base/query/graphql-queries";

function Footer() {
  const { data } = useQuery(COMPANY_LOCATION);
  const { data: socials } = useQuery(COMPANY_SOCIALS);

  return (
    <div className="w-full   relative  bg-[#f3f6fd7b] border-t">
      <Container>
        <div className=" grid lg:flex lg:justify-between md:grid-cols-2 lg:pt-[13vh] px-6 gap-12 py-8 lg:grid-cols-3 lg:pb-12">
          <div className="">
            <div className="w-24 lg:w-52">
              <Image src="/img/logo.svg" width={150} height={70} alt="logo" />
            </div>
            <div className="mt-6  lg:mt-12 text-sm mg:text-base space-y-6">
              <StyledFooterHeader>Location</StyledFooterHeader>
              <div className="flex items-center space-x-3">
                <img src={data?.locationAreas?.[0]?.iconImage?.url} className="rounded-full" />
                <p>{data?.locationAreas?.[0]?.name}</p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={data?.locationAreas?.[1]?.iconImage?.url} className="" />
                <p>{data?.locationAreas?.[1]?.name}</p>
              </div>
            </div>
          </div>

          <div className="">
            <StyledFooterHeader>Information</StyledFooterHeader>
            <div className="grid">
              <StyledFooterLinks href={`/dashboard`}>Dashboard</StyledFooterLinks>
              <StyledFooterLinks href={`/about-us`}>About Us</StyledFooterLinks>
              <StyledFooterLinks href={`/book-session`}>Book a session</StyledFooterLinks>
              <StyledFooterLinks href={`/faq`}>Faq</StyledFooterLinks>
              <StyledFooterLinks href={`/terms-of-use`}>Terms of Use </StyledFooterLinks>
              <StyledFooterLinks href={`/privacy-policy`}>Privacy Policy </StyledFooterLinks>
            </div>
          </div>

          <div className="">
            <div className="">
              <StyledFooterHeader>Follow</StyledFooterHeader>
              <div className="space-x-4 mt-3 flex">
                <StyledFollowIcons href={socials?.socials[2].link} target="_blank" rel="noreferrer">
                  <LinkedIn />
                </StyledFollowIcons>

                <StyledFollowIcons href={socials?.socials[2].link} target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </StyledFollowIcons>

                  <StyledFollowIcons
                    href={socials?.socials[2].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </StyledFollowIcons>

                  <StyledFollowIcons href={socials?.socials[2].link} target="_blank" rel="noreferrer">
                    <InstagramIcon />
                  </StyledFollowIcons>
              </div>
            </div>

            <div className="mt-8">
              <StyledFooterHeader>Customer Service</StyledFooterHeader>
              <div className="grid">
                <p className=" text-[#666D87] text-sm pt-4">+234 812 334 288</p>{" "}
                <p className=" text-[#666D87] text-sm pt-4">Support @ziga.co</p>
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <Image src="/img/pay4.png" width={50} height={30} alt="card" />
                <Image src="/img/pay3.png" width={50} height={30} alt="card" />
                <Image src="/img/pay2.png" width={50} height={30} alt="card" />
                <Image src="/img/pay1.png" width={50} height={30} alt="card" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t w-full text-center py-5 lg:py-6 border-border  lg:mt-8">
          <p className=" text-[#666D87] text-xs md:text-base ">
            Copyright© Zigah 2022 all right reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
