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
          <img src={headerBackground} alt="There InCo members on an orange background" />
        </section>
        <section className="AboutPage-container-body">
          <div className="row AboutPage-our-story">
            <div className="col-10 col-md-6">
              <h2>Our Story</h2>
              <p>
              Founder Tegan Barron combined their love of gaming and digital
              inclusive integration, bringing to life a collective of dynamic
              engineers, content writers, and designers for the sole purpose of
              breaking through digital barriers at tech conferences.
              </p>
              <p>
              In its first iteration debut, Interconnected Collective has
              interpreted an immersive bingo game (for the fun of gaming and
              collaboration) to engage attendees at the Lesbians Who Tech &
              Allies conference.
              </p>
              <p className="AboutPage-our-hope">
              Our hope remains the same
              </p>
              <p>
              to create unique visual experiences that keep viewers
              interconnected and might even bridge new communities.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={logo}
                alt="InCo logo">
              </img>
            </div>
          </div>
          <BioList />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
