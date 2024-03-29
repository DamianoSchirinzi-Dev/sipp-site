'use client';
import styled from "styled-components";
import { SocialLinks } from "../SocialLinks/SocialLinks";

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    text-align: center; 
    padding: 2rem 0rem;

    background-color: #808080;

    h2 {
        font-size: 1.4rem;
        font-weight: 500;
      }

`

export const Footer = () => {
    return (
        <StyledFooter id="find-us">
            <h2>Sipp Manchester 2024</h2>
            <SocialLinks/>
        </StyledFooter>
    )
}