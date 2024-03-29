"use client";
import styled from "styled-components";
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
  box-shadow: ${({ isSticky }) => (isSticky ? "0 2px 4px rgba(0,0,0,0.1)" : "none")};
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

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false); // Corrected

  const handleScroll = () => {
    const videoBannerHeight = document.querySelector('video')?.offsetHeight || 0; // Example: get your video banner height
    setIsSticky(window.scrollY > videoBannerHeight);
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
        <h1>About</h1>
        <h1>Coffee</h1>
        <h1>Food</h1>
        <h1>Find us</h1>
      </NavbarContent>
    </NavbarContainer>
  );
};