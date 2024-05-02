import BioList from "./BioList";
import "./AboutPage.css";
import logo from "../../assets/incologo.png";
import headerBackground from "../../assets/alltogether.png";

/** Component for AboutPage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> AboutPage -> BioList
 *
 * Linked at /about
 */
const AboutPage = () => {
  // console.debug("AboutPage");

  return (
    <div className="AboutPage">
      <div className="AboutPage-container">
        <section className="AboutPage-header">
          <img src={headerBackground} alt="Three InCo members on an orange background" />
        </section>
        <section className="AboutPage-container-body">
          <div className="AboutPage-our-story">
            <div className="AboutPage-content">
              <h2 style={{ marginBottom: ".5rem" }}>Our Story</h2>
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
          <BioList />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
