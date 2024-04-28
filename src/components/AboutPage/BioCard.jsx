import { ArrowRightShort } from "react-bootstrap-icons";
import "./BioCard.css";
import { Bio } from "./bios";
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
        <>
            {bio instanceof Bio
                ? <div className="BioCard">
                    <div className="BioCard-graphics-purple">
                        <img
                            className="BioCard-headshot img-fluid"
                            style={{ borderColor: "#7030A0" }}
                            src={bio.photo}
                            alt={bio.name}
                        />
                        {bio.drawing &&
                            <img
                                className="BioCard-drawing img-fluid"
                                style={{ borderColor: "#7030A0" }}
                                src={bio.drawing}
                                alt={bio.name}
                            />}
                        <div className="BioCard-arrow-purple">
                            <ArrowRightShort size={36} />
                        </div>
                    </div>

                    <div className="BioCard-name">{bio.name}</div>
                    <div className="BioCard-pronouns">
                        {bio.pronouns}
                    </div>
                    <div className="BioCard-role">
                        {bio.role}
                    </div>
                </div>
            : <img className="BioCard-blanks" src={bio.image} alt={bio.alt} />
            }
        </>
    );
};

export default BioCard;