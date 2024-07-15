import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./BousteVotreCareer.css";

export default function BousteVotreCareer()
{
    return (
        <>
        <div className="HolderContainer">
             <div className="flex w-[78%] m-auto">
                <LeftSection />
                <RightSection />
            </div>
        </div>
           
        </>
    )
}