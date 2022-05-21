import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoAnimations } from "animation";
import { useScroll } from "./useScroll";

function Video() {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
      <div className="background"></div>
      <motion.div className="video"
      variants={videoAnimations}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/a8ww4aNlPQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
background-color: #662d91aa;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
.video {
  z-index: 10;
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  height: 100%;
  padding: 6rem 2rem;
  .video {
    iframe {
      width: 80vw;
      height: 10rem;
    }
  }
}
`;

export default Video