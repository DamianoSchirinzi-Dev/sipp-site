"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { sizes } from "../../helpers/sizes";

interface NavigationProps {
  isSticky: boolean;
}

export const NavbarContainer = styled.div<NavigationProps>`
  background: #e09f7d;
  transition: all 0.3s;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "relative")};
  top: ${({ isSticky }) => (isSticky ? "0px" : "auto")}; // Adjusted
  width: 100%;
  z-index: 1000; // Ensure this is above the video's z-index if it's not showing
  box-shadow: ${({ isSticky }) =>
    isSticky ? "0 2px 4px rgba(0,0,0,0.1)" : "none"};
`;

export const NavbarContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media (min-width: ${sizes.tablet}px) {
    padding: 2rem 1.8rem;

    h1 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: ${sizes.large}px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none; // Remove the underline from links by default
  color: #000; // Black color for the text
  transition: color 0.3s ease, transform 0.3s ease, text-decoration 0.3s ease;

  display: inline-block; // Allows the transform property to be applied
  padding: 0.5rem 1rem; // Adds some padding around the text

  &:hover,
  &:focus {
    color: #555; // Dark grey color on hover
    transform: translateY(-2px); // Slightly raise the link
    text-decoration: underline; // Underline on hover
    text-decoration-color: #555; // Dark grey underline color
  }

  &:active {
    color: #888; // Light grey color on active/click
    transform: translateY(1px); // Moves the link down slightly on click
  }
`;

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false); // Corrected

  const handleScroll = () => {
    const videoBannerHeight =
      document.querySelector("video")?.offsetHeight || 0; // Example: get your video banner height
    setIsSticky(window.scrollY > videoBannerHeight);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let yOffset = -104;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isSticky={isSticky}>
      <NavbarContent>
        <StyledLink href="#about" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("about")}>About</h1>
        </StyledLink>
        <StyledLink href="#coffee" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("coffee")}>Coffee</h1>
        </StyledLink>
        <StyledLink href="#food" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("food")}>Food</h1>
        </StyledLink>
        <StyledLink href="#find-us" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("find-us")}>Find us</h1>
        </StyledLink>
      </NavbarContent>
    </NavbarContainer>
  );
};
