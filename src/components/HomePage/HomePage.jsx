import React from "react";
import "./HomePage.css";
import homepageGraphicOne from "../../assets/left_mainpage_image.png";
import imageAssets from "../../utils/Utils";
import { DeviceSsd } from "react-bootstrap-icons";
// import { Border } from "react-bootstrap-icons";

const HomePage = () => {
   return (
      <>
         <section className="container hero">
            <div className="row d-flex align-items-stretch justify-content-between">
               {/* <!-- Title and Subtitle Column --> */}
               <div
                  className="col-lg-6 col-md-12 m-0 p-0 order-1 order-lg-1 order-md-1 order-sm-1 d-flex flex-column justify-content-end position-relative overflow-visible col-title"
                  // style={{ backgroundColor: "lightBlue" }}
               >
                  <h1>We Are InCo.</h1>
                  <div className="Header-text">
                     <p>
                        <span className="attn-text">
                           [ Interconnected Collective ]
                        </span>
                     </p>
                  </div>
               </div>

               {/* <!-- Paragraph Column  --> */}
               <div
                  className="col-lg-6 col-md-12 m-0 p-0 order-lg-3 order-md-last order-sm-last d-flex flex-column overflow-visible position-relative"
                  // style={{ backgroundColor: "lightGreen" }}
               >
                  <p>Creating community and building </p>
                  <p>connections with bingo!</p>
                  <button
                     type="button"
                     className="btn btn-primary btn-play-bingo"
                  >
                     PLAY BINGO
                  </button>
               </div>
               {/* <!-- Image Column --> */}
               <div
                  className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 order-lg-2 order-md-3 order-md2 order-sm-2 overflow-visible  heroGraphic object-fit-cover"
                  style={
                     {
                        // backgroundColor: "red",
                        // height: "min-content",
                        // border: "1px solid red",
                     }
                  }
               >
                  <img
                     src={homepageGraphicOne}
                     loading="lazy"
                     alt="homepage Left"
                     className="homepageGraphicOne object-fit-cover"
                     // style={{ border: "1px solid purple" }}
                  ></img>
               </div>
            </div>
         </section>

         <section className="container whatIsInco">
            <div className="who-we-are-graphic z-0">
               {/* <img
               className="blueBlob"
               src={imageAssets.blueBlob}
               alt="blue background blob"
            /> */}

               <div className="container d-flex flex-column text-center justify-content-center who-are-we z-1">
                  <h2 className="z-1 mb-4">What's InCo?</h2>
                  <p className="we-are-subtitle z-1">
                     Breaking through digital with the power of fun and the{" "}
                     <br />
                     passion for people [or gamers]
                  </p>

                  <div className="row d-flex align-content-center justify-content-center z-1 position-relative">
                     {/* <img
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
                  </div> */}
                     <div className="col-xl-4 col-lg-12 col-12 whoWeAreFrame">
                        <img
                           className="oliviaPortrait z-1"
                           loading="lazy"
                           src={imageAssets.oliviaPortrait}
                           alt="Olivia Portrait"
                        />
                     </div>
                     <div className="col-xl-12 col-lg-12 col-12 whoWeAreFrame">
                        <img
                           className="laneDrawing"
                           loading="lazy"
                           src={imageAssets.laneDrawing}
                           alt="Drawing of Lane"
                        />
                     </div>
                     <div className="col-xl-4 col-lg-12 col-12 whoWeAreFrame">
                        <img
                           className="vestDrawing"
                           loading="lazy"
                           src={imageAssets.vestDrawing}
                           alt="Drawing of a vest"
                        />
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <button
                              type="button"
                              className="btn btn-info team-button z-1 "
                           >
                              MEET THE TEAM{" "}
                           </button>
                        </div>
                     </div>
                  </div>
                  {/* <img
                  src={imageAssets.greenAndPinkCloud}
                  alt="small green and pink cloud"
                  className="greenAndPinkCloud"
               /> */}
               </div>
            </div>
         </section>

         <section className="container z-1">
            <div className="row">
               <div
                  className="col-lg-6 m-0 p-0 z-1"
                  // style={{ border: "1px solid red" }}
               >
                  <div
                     className="text-content"
                     style={{ border: "1px solid black" }}
                  >
                     <h2 className="row-h2 z-1">
                        Engaging with the Lesbians Who Tech Pride Summit
                     </h2>
                     <p className="who-are-we-p">
                        Every single member of Interconnected Collective came
                        together because of this Summit! Lesbians Who Tech is
                        such an inspiring organization that continues striving
                        for women, women of color, and nonbinary leaders. We
                        hope to see you there!
                     </p>
                     <button
                        type="button"
                        className="btn btn-info summit-button"
                     >
                        JOIN THE SUMMIT
                     </button>
                  </div>
               </div>
               <div
                  className="col-lg-6 m-0 p-0"
                  style={{ border: "1px solid green" }}
               >
                  <div class="graphicFrame">
                     <img
                        src={imageAssets.homepageGraphicLane}
                        className="homepageGraphicTwo"
                        loading="lazy"
                        alt="graphic of Lane"
                     />
                  </div>
               </div>
            </div>
         </section>
         <section className="container-fluid p-0 mb-5">
            <div className="row body-content position-relative m-0 p-0 z-0">
               <div className="col-lg-12 container-fluid position-relative d-flex flex-row-reverse align-items-center z-1 m-0 p-0 overflow-visible ">
                  <div
                     className="col-lg-6 z-1 bg-transparent"
                     style={{ border: "1px solid purple" }}
                  >
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
                  <div
                     class="col-lg-6 graphicFrame z-1 d-flex justify-content-center"
                     style={{ border: "1px solid yellow" }}
                  >
                     <img
                        src={imageAssets.bubbleGumGraphic}
                        className="rainbowGraphic z-1"
                        alt="rainbow graphic"
                     />
                  </div>
               </div>
               <div className="wave-container z-0 overflow-visible">
                  <img
                     className="wave-graphic z-0"
                     src={imageAssets.homepageWave}
                     alt="wave graphic"
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default HomePage;
