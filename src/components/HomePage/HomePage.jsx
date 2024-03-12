import React from "react";
import "./HomePage.css";
const HomePage = () => {
   return (
      <>
         <div className="Container">
            <section className="container-header">
               <div className="right-panel">New York Event</div>
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
               <div className="left-panel">Virtual Event</div>
            </section>
         </div>
         <section className="container-body">
            <div className="row">
               <h2>Why Bingo?</h2>
               <h3>Keeping you engaged & building community</h3>
               <p>
                  Bingo game offers a refreshing break from traditional online
                  activities, providing a light-hearted way to stay engaged and
                  connected, all while fostering a sense of community. See you
                  there!
               </p>
               <button type="button" className="btn btn-dark">
                  See more
               </button>
            </div>
         </section>
      </>
   );
};

export default HomePage;
