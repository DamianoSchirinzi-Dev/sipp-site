"use client";
import styled from "styled-components";

const StyledCtaSection = styled.div`
  display: flex;
  flex-direction: column;
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

  button {
    padding: 0.8rem 1.6rem;
    border: 1px solid black; 
    background: transparent;
    color: black;
    font-size: 1rem; 
    font-weight: bold; 
    cursor: pointer; 
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #E09F7D;
      border-color: transparent;
      border-radius: 5%
    }

    &:focus {
      outline: none; 
      border-color: grey;
    }
`;

type CtaSectionProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  sectionId: string;
};

export const CtaSection = ({
  heading,
  subheading,
  buttonText,
  buttonLink,
  sectionId,
}: CtaSectionProps) => {
  return (
    <StyledCtaSection id={sectionId}>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <button>{buttonText}</button>
    </StyledCtaSection>
  );
};
