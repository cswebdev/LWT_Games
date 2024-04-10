import BioList from "./BioList";
import "./AboutPage.css";

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
          <div className="AboutPage-header-images">
            {}
          </div>
          <h1>#LWT Games</h1>
          <div className="AboutPage-mission">
            <p>Mission statement</p>
          </div>
        </section>
        <section className="AboutPage-container-body">
          <div className="row AboutPage-our-story">
            <div className="col-md-6">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              </div>
              <div className="col-md-6">
                <img
                  src={"https://picsum.photos/400/400"}
                  alt="Placeholder">
                </img>
              </div>
          </div>
          <div className="row">
            <BioList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
