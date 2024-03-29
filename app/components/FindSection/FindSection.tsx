"use client";
import styled from "styled-components";

const StyledFindSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 3.4rem 3rem;

  // Add a before pseudo-element to act as the horizontal line
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; // Line will span the full width of the container
    height: 1px; // Line thickness
    background-color: black; // Line color
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .AddressSection {
    h1 {
        padding-bottom: 1rem;
    }
    padding-top: 1.6rem;
    display:flex;
    flex-direction: column;
    gap: .6rem;
  }
`;

export const FindSection = () => {
  return (
    <StyledFindSection>
      <h1>Find us</h1>
      <h2>You can find us here.</h2>
      <div>
        <h1>Sipp</h1>
        <div className="AddressSection">
          <p>Tariff Street</p>
          <p>Manchester M1 3DB</p>
        </div>
        <div className="AddressSection">
          <h1>Opening Hours</h1>
          <p>Mon - Fri 09:00 - 18:00</p>
          <p>Sat - Sun 10:00 - 16:00</p>
        </div>
      </div>
    </StyledFindSection>
  );
};
