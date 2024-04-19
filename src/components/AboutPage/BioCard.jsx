import {
    Linkedin,
    PersonFill,
    Behance,
    Github,
    ShareFill
} from "react-bootstrap-icons";
import "./BioCard.css";
/** Component for BioCard
 *
 * Props:
 * - bio: { name, pronouns, role, bio, photo, drawing, portfolio, linkedIn,
 *   behance, github, otherSocial, emoji, reasonForJoining, gainedFromLWT }
 *
 * State:
 * - none
 *
 * BioList -> BioCard
 */
const BioCard = ({ bio }) => {
    // console.debug("BioCard", bio);

    return (
        <div className="BioCard">
            <img
              className="BioCard-headshot img-fluid"
              style={{borderColor: "#7030A0"}}
              src={bio.photo}
              alt={bio.name}
            />
            {bio.drawing &&
            <img
              className="BioCard-drawing img-fluid"
              style={{borderColor: "#7030A0"}}
              src={bio.drawing}
              alt={bio.name}
            />}
            <div className="BioCard-name">{bio.name}</div>
            <div className="BioCard-pronouns">
                {bio.pronouns}
            </div>
            <div className="BioCard-role">
                {bio.role}
            </div>
        </div>
    )
}

export default BioCard;