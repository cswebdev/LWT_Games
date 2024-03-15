import React from "react";
import "./HomePage.css";

const HomePage = () => {
   return (
      <>
         <div className="Container">
            <section className="container-header">
               <div className="right-panel">
                  {/* <img src={homepageRightImg}></img> */}
               </div>
               <div className="middle-panel">
                  <h1>LWT GAMES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Minima, aliquam! Architecto eaque animi ab quisquam unde
                     impedit illo quo voluptatem, placeat officia, ex
                     perspiciatis quos iste quis praesentium ipsum iure.
                  </p>
                  <button type="button" class="btn btn-primary">
                     Play Bingo
                  </button>
               </div>
               <div className="left-panel">
                  {/* <img src={homepageLeftImg}></img> */}
               </div>
            </section>
         </div>
         <section className="container-body">
            <div className="row">
               <div className="col-md-6">
                  <h2>Engaging with the Tech Pride Summit</h2>
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
               <div className="col-md-6"></div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <h2>Why Bingo?</h2>
                  <h3>Keeping you engaged & building community</h3>
                  <p>
                     Bingo game offers a refreshing break from traditional
                     online activities, providing a light-hearted way to stay
                     engaged and connected, all while fostering a sense of
                     community. See you there!
                  </p>
                  <button type="button" className="btn btn-info">
                     See more
                  </button>
               </div>
               <div className="col-md-6">
                  <div>image goes here</div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomePage;
