import { Link } from "react-router-dom";
import { Linkedin, PersonCircle } from "react-bootstrap-icons";
/** Component for BioCard
 *
 * Props:
 * - bio: { name, pronouns, role, bio, photo, drawing, portfolio, linkedIn, emoji,
 *   reasonForJoining, gainedFromLWT }
 *
 * State:
 * - none
 *
 * BioList -> BioCard
 */
const BioCard = ({ bio }) => {
    console.debug("BioCard", bio);

    return (
        <div className="BioCard">
            <h2>{bio.name}</h2><small>{bio.pronouns}</small>
            <h3>{bio.role}</h3>
            <p>{bio.bio}</p>
            {bio.reasonForJoining &&
                <p>
                    <b>Why did you join #LWTGames:</b> {bio.reasonForJoining}
                </p>
            }
            {bio.gainedFromLWT &&
                <p>
                    <b>What have you gained from #LWTGames:</b> {bio.gainedFromLWT}
                </p>
            }
            {bio.linkedIn && <a href={bio.linkedIn}><Linkedin size={32} /></a>}
            {bio.portfolio && <a href={bio.portfolio}><PersonCircle size={32} /></a>}
        </div>
    )
}

export default BioCard;