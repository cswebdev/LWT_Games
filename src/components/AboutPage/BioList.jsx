import BioCard from "./BioCard";
import { BIOS } from "./bios";
import "./BioList.css";

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
    // console.debug("BioList", BIOS);

    return (
        <div className="BioList">
            <div className="BioList-header">
                <h2>Contributors</h2>
                <p>
                    Our one-of-a-kind group of techies who left an impression on InCo.
                </p>
            </div>
            <div className="BioList-bios">
                {BIOS.map((bio, idx) => <BioCard key={idx} bio={bio} />)}
            </div>
        </div>
    );

};

export default BioList;