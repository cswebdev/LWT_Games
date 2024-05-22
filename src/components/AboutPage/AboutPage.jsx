import { useState } from "react";
import BioList from "./BioList";
import "./AboutPage.css";
import logo from "../../assets/incologo.png";
import headerBackground from "../../assets/alltogether.png";
import julianeHeader from "../../assets/juliane-header.png";
import jimenaHeader from "../../assets/jimena-header.png";
import weiHeader from "../../assets/wei-header.png";

/** Component for AboutPage
 *
 * Props:
 * - none
 *
 * State:
 * - readMoreShow: boolean for expanding about us section on mobile
 *
 * App -> AboutPage -> BioList
 *
 * Linked at /about
 */
const AboutPage = () => {
  // console.debug("AboutPage");

  const [readMoreShow, setReadMoreShow] = useState(false);

  const handleShow = () => setReadMoreShow(true);

  return (
    <div className="AboutPage">
      <div className="AboutPage-desktop">
        <section className="AboutPage-header">
          <img src={headerBackground} alt="Three InCo members on an orange background" />
        </section>
        <div className="AboutPage-our-story">
          <div className="AboutPage-content">
            <h1 style={{ marginBottom: ".5rem" }}>Our Story</h1>
            <p>
              Founder Tegan Barron combined their love of gaming and digital
              inclusive integration, bringing to life a collective of dynamic
              engineers, content writers, and designers. In its debut,
              Interconnected Collective has interpreted an immersive bingo
              game (for the fun of it!) to engage attendees at the Lesbians
              Who Tech & Allies conference, 2024.
            </p>
            <p>
              At InCo., we harness community training methodologies and
              creative collaboration to elevate our talents. Inspired by the
              neuroscience principle that "neurons that fire together wire
              together," we've curated a suite of tools and techniques
              designed to build something bigger than ourselves…an online
              bingo board that can be played around the world!
            </p>
          </div>
          <img
            src={logo}
            alt="InCo logo">
          </img>
        </div>
      </div>
      <div className="AboutPage-mobile">
        <h1 style={{ marginBottom: ".5rem" }}>Our Story</h1>
        <svg width="430" height="912" viewBox="0 0 430 912" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1227 89.8275C669.039 -120.42 744.533 112.133 277.686 54.8882C-189.162 -2.35701 65.451 588.786 102.401 724C237.677 1219.03 1227 577.901 1227 577.901V89.8275Z" fill="#FFD300" fillOpacity="0.15" />
        </svg>
        <img className="AboutPage-mobile-juliane" src={julianeHeader} alt="Headshot of InCo member Juliane" />
        <div className="AboutPage-mobile-content">
          <p>
            Founder Tegan Barron combined their love of gaming and digital
            inclusive integration, bringing to life a collective of dynamic
            engineers, content writers, and designers. In its debut,
            Interconnected Collective has interpreted an immersive bingo
            game (for the fun of it!) to engage attendees at the Lesbians
            Who Tech & Allies conference, 2024.
          </p>
          <p>
            At InCo., we harness community training methodologies and
            creative collaboration to elevate our talents. Inspired by the
            neuroscience principle that "neurons that fire together wire
            together," we've curated a suite of tools and techniques
            designed to build something bigger than ourselves…an online
            bingo board that can be played around the world!
          </p>
        </div>
        <img className="AboutPage-mobile-jimena" src={jimenaHeader} alt="Headshot of InCo member Jimena" />
        <img className="AboutPage-mobile-wei" src={weiHeader} alt="Headshot of InCo member Wei" />
        <img
          className="AboutPage-mobile-inco-logo"
          src={logo}
          alt="InCo logo">
        </img>
      </div>
      <BioList />
    </div>
  );
};

export default AboutPage;
