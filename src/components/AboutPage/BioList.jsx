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
    console.debug("BioList");

    return (
        <BioCard />
    )

}

export default BioList;