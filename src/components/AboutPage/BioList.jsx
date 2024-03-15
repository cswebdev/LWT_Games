import BioCard from "./BioCard";
import { BIOS } from "./bios";

/** Component for BioList
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * AboutPage -> BioList -> BioCard
 */
const BioList = () => {
    console.debug("BioList", BIOS);

    return (
        <div className="BioList">
            {BIOS.map((bio, idx) => <BioCard key={idx} bio={bio} />)}
        </div>
    )

}

export default BioList;