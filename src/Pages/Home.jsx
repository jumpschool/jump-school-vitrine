import HeroSection from "../Components/Hero/HeroSection";
import Question from "../Components/Home/Questions/Question";
import BousteCareer from "../Components/bousteVotreCareer/BousteVotreCareer";
import Rapport from "../Components/Home/RapportInsersion/Rapport";
import Testemoials from  "../Components/Testemonials/TestemonialsHolder"
import FirstSection from '../Components/Formation-proposé/FirstSection'
import JumpSchoolSection from '../Components/JumpSchool/JumpSchoolSection'
export default function Home(){
    return (
        <>
        <HeroSection />
        <FirstSection/>
        <Rapport/>
        <BousteCareer />
        <Testemoials />
        <JumpSchoolSection/>
        <Question/>
        </>
    )
}