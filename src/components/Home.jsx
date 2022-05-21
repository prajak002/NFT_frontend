import React from 'react';
import styled from "styled-components";
import home from "assets/Home.png";
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>METAVERSE</h1>
          </div>  
          <div className="subTitle">
            <p>
              An Archetechtural life
            </p>  
          </div>
          <img src={play} alt="Play Button" />
        </div>  
      </motion.div>

      <motion.div className="info"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
          <div className="grid">
            <div className="col">
                <strong>NFT Platform</strong>
                <p>transactions</p>
            </div>
            <div className="col">
                <strong>Email</strong>
                <p>blossoms@gmail.com</p>
            </div> 
            <div className="col">
                <strong>Mobile</strong>
                <p>+91 99999999</p>
            </div> 
            <div className="col">
                <strong>Address</strong>
                <p>322, xxxx,</p>
                <p>997773 India</p>
            </div> 
            <div className="col">
                <strong>Services</strong>
                <p>Sparking</p>
                <p>cryptocurrencey handeling</p>
            </div> 
            <div className="col">
                <strong>service</strong>
               
                <p>24 x 365</p>
            </div>   
          </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home{
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
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
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