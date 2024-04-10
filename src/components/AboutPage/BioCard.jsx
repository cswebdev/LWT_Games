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
        <div className="BioCard col-md-5 col-lg-4">
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
            <h2 className="BioCard-name">{bio.name}</h2>
            <div className="BioCard-pronouns">
                Pronouns: {bio.pronouns}
            </div>
            <div className="BioCard-role">
                {bio.role}
            </div>
            <p className="BioCard-bio">{bio.bio}</p>
            {/* {bio.reasonForJoining &&
                <p>
                    <b>Why did you join #LWTGames:</b> {bio.reasonForJoining}
                </p>
            }
            {bio.gainedFromLWT &&
                <p>
                    <b>What have you gained from #LWTGames:</b> {bio.gainedFromLWT}
                </p>
            } */}
            <ul className="BioCard-links">
                {bio.linkedIn && <li><a href={bio.linkedIn}><Linkedin size={26} /> &nbsp; LinkedIn</a></li>}
                {bio.portfolio && <li><a href={bio.portfolio}><PersonFill size={26} /> &nbsp; Portfolio</a></li>}
                {bio.behance && <li><a href={bio.behance}><Behance size={26} /> &nbsp; Behance</a></li>}
                {bio.github && <li><a href={bio.github}><Github size={26} /> &nbsp; Github</a></li>}
                {bio.otherSoceal && <li><a href={bio.otherSocial}><ShareFill size={26} /></a> &nbsp; Social</li>}
            </ul>
        </div>
    )
}

export default BioCard;