import BioList from "./BioList";
import logo from "../../assets/LWT_logo.png";

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
  console.debug("AboutPage");

  return (
    <div className="AboutPage">
      <div className="AboutPage-lwtgames">
        <img src={logo} alt="Unofficial LWT Games logo"></img>
          <h2>Why LWT Games?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button" className="btn btn-primary">
            <a href="/bingo">Play Bingo</a>
        </button>
      </div>
      <BioList />
    </div>
  );
};

export default AboutPage;
