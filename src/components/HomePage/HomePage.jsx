import React from "react";
import "./HomePage.css";
import homepageRightImg from "../../assets/right_mainpage_image.png";
import homepageLeftImg from "../../assets/left_mainpage_image.png";

const HomePage = () => {
   return (
      <>
         <div className="Container">
            <section className="Container-header">
               <div className="Right-panel">
                  <img src={homepageLeftImg} alt="homepage Left"></img>
               </div>

               <div className="Left-panel">
                  <h1>#LWT GAMES</h1>
                  <p>
                     Playing Bingo to connect <br></br> and create community
                  </p>
                  <button type="button" className="btn btn-primary">
                     Play Bingo
                  </button>
               </div>
            </section>
         </div>
         <section className="Container-body">
            <div className="row">
               <div className="col-md-6">
                  <h2>Engaging with Lesbians Who Tech Pride Summit</h2>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Repellat accusamus, pariatur ducimus, inventore nemo illum
                     repudiandae dolore quos deleniti nulla cupiditate itaque
                     aperiam veritatis sequi. Reiciendis numquam laudantium ex
                     totam.
                  </p>
                  <button type="button" className="btn btn-outline-info">
                     Join Summit?
                  </button>
               </div>
               <div className="col-md-6 m-0 p-0">
                  <div class="placeholder"></div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <h2>Why Bingo?</h2>
                  <h3>Keeping you engaged & building community</h3>
                  <p>
                     Bingo game offers a refreshing break from traditional
                     online activities, providing a light-hearted way to stay
                     engaged and connected, all while fostering a sense of
                     community.
                  </p>
                  <button type="button" className="btn btn-info">
                     Play Bingo
                  </button>
               </div>
               <div className="col-md-6 m-0 p-0">
                  <div class="placeholder"></div>
               </div>
            </div>
            <div className="row d-flex text-center justify-content-center">
               <h2>
                  We're a group of _____ individuals coming together to better
                  our community
               </h2>

               <div className="images d-flex align-content-center justify-content-evenly">
                  <div className="smallPlaceholder"></div>
                  <div className="smallPlaceholder"></div>
                  <div className="smallPlaceholder"></div>
               </div>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  A scelerisque purus semper eget duis at tellus at urna.
               </p>
               <button type="button" className="btn btn-info team-button">
                  Meet the Team
               </button>
            </div>
         </section>
      </>
   );
};

export default HomePage;
