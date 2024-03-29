"use client";
import styled from "styled-components";
import Image from "next/image";
import Cafe from "../../../public/images/icons/Cafe_1.png";

const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3rem;

  padding: 4rem 3rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const StyledInfoSectionContainer = styled.div`
  padding-bottom: 2rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

type InfoSectionProps = {
  heading: string;
  subheading: string;
  body1: string;
  body2: string;
  imageUrl: string;
};

export const InfoSection = ({
  heading,
  subheading,
  body1,
  body2,
  imageUrl,
}: InfoSectionProps) => {
  return (
    <StyledInfoSectionContainer>
      <StyledInfoSection>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <div>
          <p>{body1}</p>
          <p>{body2}</p>
        </div>
      </StyledInfoSection>

      <Image src={Cafe} alt="test" objectFit="cover"></Image>
    </StyledInfoSectionContainer>
  );
};
