import React from "react";
import "./HomePage.css";
import homepageGraphicOne from "../../assets/left_mainpage_image.png";
import imageAssets from "../../utils/Utils";
// import { Border } from "react-bootstrap-icons";

const HomePage = () => {
   return (
      <>
         <div className="Container">
            <section className="Container-header">
               <div className="Right-panel">
                  <img
                     src={homepageGraphicOne}
                     loading="lazy"
                     alt="homepage Left"
                  ></img>
               </div>

               <div className="Left-panel " style={{ border: "1px solid red" }}>
                  <h1>We Are InCo.</h1>
                  <p className="Header-text">
                     Let's connect & create<br></br> community with bingo!
                  </p>
                  <button type="button" className="btn btn-primary">
                     Play Bingo
                  </button>
               </div>
            </section>
         </div>
         <div className="row d-flex text-center justify-content-center who-are-we">
            <h2>Who Are We?</h2>
            <p className="we-are-subtitle">We are Interconnected Collective</p>
            <p className="we-are-text">
               a group of gamers determined to breakthrough digital walls
               through the power of fun!
            </p>

            <div className="d-flex align-content-center justify-content-center">
               <div className="whoWeAreFrame">
                  <img
                     className="oliviaPortrait"
                     loading="lazy"
                     src={imageAssets.oliviaPortrait}
                     alt="Olivia Portrait"
                  />
               </div>
               <div className="whoWeAreFrame">
                  <img
                     className="laneDrawing"
                     loading="lazy"
                     src={imageAssets.laneDrawing}
                     alt="Drawing of Lane"
                  />
               </div>
               <div className="whoWeAreFrame">
                  <img
                     className="vestDrawing"
                     loading="lazy"
                     src={imageAssets.vestDrawing}
                     alt="Drawing of a vest"
                  />
               </div>
            </div>

            <button type="button" className="btn btn-info team-button">
               Meet the Team{" "}
            </button>
         </div>
         <section className="Container-body">
            <div className="row body-content">
               <div className="col-md-6">
                  <h2>Engaging with Lesbians Who Tech Pride Summit</h2>
                  <p>
                     Every single member of Interconnected Collective came
                     together because of this Summit! Lesbians Who Tech is such
                     an inspiring organization that continues striving for
                     women, women of color, and nonbinary leaders. We hope to
                     see you there!
                  </p>
                  <button
                     type="button"
                     className="btn btn-outline-info summit-button"
                  >
                     Join The Summit{" "}
                     <span className="material-symbols-outlined ">
                        chevron_right
                     </span>
                  </button>
               </div>
               <div className="col-md-6 m-0 p-0 d-flex">
                  <div class="graphicFrame">
                     <img
                        src={imageAssets.homepageGraphicLane}
                        className="homepageGraphicTwo"
                        loading="lazy"
                        alt="Image graphic of"
                     />
                  </div>
               </div>
            </div>
            <div className="row body-content position-relative m-0 p-0">
               <section className="svg-container position-relative d-flex flex-row-reverse align-items-center z-1 m-0 p-0 ">
                  <div className="col-md-6 z-1 bg-transparent">
                     <h2>Why Bingo?</h2>
                     <p>
                        Bingo game offers a refreshing break from traditional
                        online activities, providing a light-hearted way to stay
                        engaged and connected, all while fostering a sense of
                        community.
                     </p>
                     <button type="button" className="btn btn-primary">
                        Play Bingo
                     </button>{" "}
                  </div>{" "}
                  <div className="wave-container z-0">
                     <img
                        className="wave-graphic z-0"
                        src={imageAssets.homepageWave}
                        alt="wave graphic"
                     />
                  </div>
                  <section className="col-md-6 m-0 p-0">
                     <div class="graphicFrame z-1">
                        <img
                           src={imageAssets.bubbleGumGraphic}
                           className="rainbowGraphic z-1"
                           alt="rainbow graphic"
                        />
                     </div>
                  </section>
               </section>
            </div>
         </section>
      </>
   );
};

export default HomePage;
