"use client";
import styled from "styled-components";
import Image from "next/image";
import icon1 from "../../../public/images/icons/TwitterX.png";
import icon2 from "../../../public/images/icons/Facebook.png";
import icon3 from "../../../public/images/icons/Instagram.png";

const StyledSocialLinksSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const SocialLinks = () => {
  return (
    <StyledSocialLinksSection>
      <Image src={icon1} alt="twitter Icon" width={40} height={40}></Image>
      <Image src={icon2} alt="twitter Icon" width={40} height={40}></Image>
      <Image src={icon3} alt="twitter Icon" width={40} height={40}></Image>
    </StyledSocialLinksSection>
  );
};
