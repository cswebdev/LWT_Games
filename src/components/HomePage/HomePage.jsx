import React from "react";
import "./HomePage.css";
import homepageOliviaGraphic from "../../assets/left_mainpage_image.png";
import imageAssets from "../../utils/Utils";
import { DeviceSsd } from "react-bootstrap-icons";
// import { Border } from "react-bootstrap-icons";

const HomePage = () => {
   return (
      <>
         <section className="container hero overflow-visible">
            <div className="row d-flex align-items-stretch justify-content-between pt-3 overflow-visible">
               {/* <!-- Title and Subtitle Column --> */}
               <div
                  className="col-lg-6 col-md-12 mt-5 p-0  order-first order-md-1 order-lg-1 order-sm-1  d-flex flex-column justify-content-end position-relative overflow-visible col-title"
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
                  className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 order-lg-3 order-md-last order-sm-last order-sm-3 d-flex flex-column overflow-visible position-relative"
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
                  className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 order-lg-2 order-md-3 order-md-2 order-sm-2 overflow-visible  heroGraphic object-fit-contain"
                  style={
                     {
                        // backgroundColor: "red",
                        // height: "min-content",
                        // border: "1px solid red",
                     }
                  }
               >
                  <img
                     src={homepageOliviaGraphic}
                     loading="lazy"
                     alt="homepage Left"
                     className="homepageOliviaGraphic object-fit-contain"
                     // style={{ border: "1px solid purple" }}
                  ></img>
               </div>
            </div>
         </section>

         <section className="container whatIsInco overflow-visible">
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
                     <div className="col-xl-4 col-lg-12 col-12 whoWeAreFrame flex-shrink-0">
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

         <section className="container body-bottom z-1">
            <div className="row">
               <div
                  className="col-lg-7 order-2 m-0 p-0 z-1"
                  // style={{ border: "1px solid red" }}
               >
                  <div
                     className="text-content"
                     // style={{ border: "1px solid black" }}
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
                        className="btn btn-info summit-button center-md"
                     >
                        JOIN THE SUMMIT
                     </button>
                  </div>
               </div>
               <div
                  className="col-lg-5 order-1 m-0 p-0"
                  // style={{ border: "1px solid green" }}
               >
                  <div class="graphicFrame">
                     <img
                        src={imageAssets.homepageGraphicLane}
                        className="homepageGraphicLane"
                        loading="lazy"
                        alt="graphic of Lane"
                     />
                  </div>
               </div>
            </div>
         </section>
         <section className="container body-bottom p-0 mt-5 overflow-hidden z-1">
            <div className="row position-relative m-0 p-0 z-1">
               <div
                  className="col-lg-12 position-relative d-flex grandmas-bingo align-items-center justify-content-end z-1 gap-5 mb-md-5 mb-sm-0"
                  // style={{ border: "1px solid red" }}
               >
                  <div
                     className="col-lg-7 col-md-12 col-sm-12 order-2 z-1 bg-transparent d-flex flex-column"
                     // style={{ border: "1px solid purple" }}
                  >
                     <h2 className="row-h2 col-md-12 col-sm-12">
                        Not Your Grandma's Bingo!
                     </h2>
                     <p className="who-are-we-p col-md-12 col-sm-12">
                        We created a light hearted game to stay engaged and
                        connect, all while learning and interacting with
                        attendees throughout the summit.
                     </p>
                     <button
                        type="button"
                        className="btn btn-primary btn-play-bingo-purple center-md"
                     >
                        PLAY BINGO
                     </button>
                  </div>
                  <div
                     class="col-lg-5 graphicFrame order-1 z-2 d-flex justify-content-center bubbleGumFrame"
                     // style={{ border: "1px solid yellow" }}
                  >
                     <img
                        src={imageAssets.bubbleGumGraphic}
                        className="bubbleGumGraphic z-1"
                        alt="rainbow graphic"
                     />
                  </div>
               </div>
            </div>
         </section>
         <div className="wave-container container-fluid z-0 overflow-visible">
            <img
               className="wave-graphic z-0"
               src={imageAssets.homepageWave}
               alt="wave graphic"
            />
         </div>
      </>
   );
};

export default HomePage;
