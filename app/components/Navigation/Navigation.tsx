"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavigationProps {
  isSticky: boolean;
}

export const NavbarContainer = styled.div<NavigationProps>`
  background: #808080;
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
  padding: 2rem 1.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const StyledLink = styled.h1`
  cursor: pointer;
  text-decoration: none; // Remove the underline from links
  color: #000; // Black color for the text
  transition: color 0.3s ease;

  &:hover {
    color: #555; // Dark grey color on hover
  }

  &:active {
    color: #888; // Light grey color on active/click
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
    // Prevent default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <Link href="#about" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("about")}>About</h1>
        </Link>
        <Link href="#coffee" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("coffee")}>Coffee</h1>
        </Link>
        <Link href="#food" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("food")}>Food</h1>
        </Link>
        <Link href="#find-us" scroll={false} passHref>
          <h1 onClick={() => scrollToSection("find-us")}>Find us</h1>
        </Link>
      </NavbarContent>
    </NavbarContainer>
  );
};
