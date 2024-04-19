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
        <div className="BioCard col-6 col-md-3">
            <img
              className="BioCard-headshot"
              src={bio.photo}
              alt={bio.name}
            />
            {bio.drawing &&
            <img
              className="BioCard-drawing"
              src={bio.drawing}
              alt={bio.name}
            />}
            <h3 className="BioCard-name">{bio.name}</h3>
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