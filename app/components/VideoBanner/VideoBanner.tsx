"use client";
import styled from "styled-components";
import { SocialLinks } from "../SocialLinks/SocialLinks";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledVideo = styled.video`
  width: 100vw;
  height: auto;
  min-height: 100vh;

  // Ensures video is not cut off on narrower screens
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100vh;
  }
`;

const StyledIntroTextSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  color: white;

  h1 {
    font-size: 5rem;
    font-weight: 200;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 200;
  }
`;



export const VideoBanner = () => {
  return (
    <VideoContainer>
      <StyledVideo
        autoPlay={true}
        loop={true}
        muted={true}
        width="1920"
        playsInline={true}
      >
        <source src="videos/tempVideo.mp4" type="video/mp4" />
      </StyledVideo>
      <StyledIntroTextSection>
        <h1>Sipp</h1>
        <h3>Artisan coffee, the best in Manchester</h3>
        <SocialLinks/>
      </StyledIntroTextSection>
    </VideoContainer>
  );
};
