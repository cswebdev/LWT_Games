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

               <div className="Left-panel">
                  <h1>We Are InCo.</h1>
                  <div className="Header-text">
                     <p>
                        <span className="attn-text">
                           [ Interconnected Collective ]
                        </span>
                     </p>
                     <p>Creating community and building </p>
                     <p>connections with bingo!</p>
                  </div>
                  <button
                     type="button"
                     className="btn btn-primary btn-play-bingo"
                  >
                     PLAY BINGO
                  </button>
               </div>
            </section>
         </div>
         <div className="who-we-are-graphic z-0">
            <img
               className="blueBlob"
               src={imageAssets.blueBlob}
               alt="blue background blob"
            />

            <div className="row d-flex text-center justify-content-center who-are-we z-1">
               <h2 className="z-1 mb-4">What's InCo?</h2>
               <p className="we-are-subtitle z-1">
                  Breaking through digital with the power of fun and the <br />
                  passion for people [or gamers]
               </p>

               <div className="d-flex align-content-center justify-content-center z-1 position-relative mt-4">
                  <img
                     src={imageAssets.pinkCloud}
                     loading="lazy"
                     alt="tiny solo pink cloud"
                     className="pinkCloudImg z-2"
                  />
                  <img
                     src={imageAssets.tealAndPurpleCloud}
                     loading="lazy"
                     alt="teal and purple cloud"
                     className="tealCloudImg"
                  ></img>

                  <div className="blueMountain">
                     <img
                        src={imageAssets.blueMountain}
                        loading="lazy"
                        alt="blue mountain graphic"
                        className="blueMountainImg z-2"
                     />
                  </div>
                  <div className="whoWeAreFrame">
                     <img
                        className="oliviaPortrait z-1"
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
                  <div className="whoWeAreFrame d-flex align-content-center justify-content-center">
                     <img
                        className="vestDrawing"
                        loading="lazy"
                        src={imageAssets.vestDrawing}
                        alt="Drawing of a vest"
                     />
                  </div>
               </div>
               <img
                  src={imageAssets.greenAndPinkCloud}
                  alt="small green and pink cloud"
                  className="greenAndPinkCloud"
               />

               <button type="button" className="btn btn-info team-button z-1">
                  MEET THE TEAM{" "}
               </button>
            </div>
         </div>
         <section className="Container-body z-1">
            <div className="row body-content d-flex align-content-center justify-content-center">
               <div className="col-md-5 m-0 p-0 z-1">
                  <h2 className="row-h2 z-1">
                     Engaging with Lesbians Who Tech Pride Summit
                  </h2>
                  <p className="who-are-we-p">
                     Every single member of Interconnected Collective came
                     together because of this Summit! Lesbians Who Tech is such
                     an inspiring organization that continues striving for
                     women, women of color, and nonbinary leaders. We hope to
                     see you there!
                  </p>
                  <button type="button" className="btn btn-info summit-button">
                     JOIN THE SUMMIT
                  </button>
               </div>
               <div className="col-md-4 m-0 p-0">
                  <div class="graphicFrame">
                     <img
                        src={imageAssets.homepageGraphicLane}
                        className="homepageGraphicTwo"
                        loading="lazy"
                        alt="graphic of"
                     />
                  </div>
               </div>
            </div>
            <div className="row body-content position-relative m-0 p-0 z-0">
               <section className="svg-container position-relative d-flex flex-row-reverse align-items-center z-1 m-0 p-0 overflow-visible ">
                  <div className="col-md-7 z-1 bg-transparent">
                     <h2 className="row-h2">Not your Grandma's Bingo!</h2>
                     <p className="who-are-we-p">
                        We created a light hearted game to stay engaged and
                        connect, all while learning and interacting with
                        attendees throughout the summit.
                     </p>
                     <button
                        type="button"
                        className="btn btn-primary btn-play-bingo-purple"
                     >
                        PLAY BINGO
                     </button>{" "}
                  </div>{" "}
                  <div className="wave-container z-0 overflow-visible">
                     <img
                        className="wave-graphic z-0"
                        src={imageAssets.homepageWave}
                        alt="wave graphic"
                     />
                  </div>
                  <section className="col-md-6 m-0 p-0 ">
                     <div class="graphicFrame z-1 d-flex justify-content-center">
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
