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
    border: 1px solid black; // Black outline
    background: transparent; // No background color
    color: black; // Black text
    font-size: 1rem; // Adjust font size as needed
    font-weight: bold; // Bold font weight
    cursor: pointer; // Hand cursor on hover
    transition: all 0.2s ease-in-out; // Smooth transition for hover effects

    &:hover {
      background-color: black; // Change background on hover
      color: white; // Change text color on hover
      border-color: transparent; // Remove border on hover if desired
    }

    &:focus {
      outline: none; // Remove default focus outline
      border-color: grey; // Optional: add custom focus styles
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
