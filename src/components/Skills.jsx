import React from 'react';
import styled from "styled-components";

import Icon from './Element';
import Title from "./AnimatedTitle";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";
import Typed from "react-typed";
import Typist from 'react-typist';
import Lottie from 'lottie-react';
import Roadmap from './roadmap.json'
import Metaverse from './Metaverse.json'


function Home() {
  return (
    <Section id="home">
   
  
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      > <div class="drop-shadow">
        <div className="content">
          { <div className="info">
            <Lottie animationData={Roadmap} style={{ height: "auto", width: 600 }} />
          </div>   
          }

          <nbsp></nbsp>
        
          <nbsp></nbsp>
          <div className="subTitle">
             <Typist >
              <h1>check our journey</h1>
              <Typist.Delay ms={1000} />
              <br>
              </br>
               <h1>Be with us</h1>
              <Typist.Delay ms={1000} />
              <br></br>
               <h1>track 1

               </h1>
               <h1>track 2</h1>
                <h1>track 3</h1>
                 <h1>track 4</h1>
                   <h1>track 5</h1>             
              <Typist.Delay ms={1000} />
              
              
            </Typist>
            </div>
              </div>  
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background:black;
  min-height: 100vh;
  background-size: cover;
  position: relative;
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color:#portfolio;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          color:white
        }
      }
      
     

      .subTitle {
        h1{
          width: 50%;
          margin-bottom: 1rem;
          color:white
        }
      }
    }
  }
   .info{
   width:800px;
   height: 800px;
   background: inherit;
   position:absolute;
   overflow: hidden;
   top: 30%;
   right: 0%;
   margin-rightt: 20px;
   float :
   margin-top: -250px;
   border-radius: 2px;
 }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home