import HeroSection from "../Components/Hero/HeroSection";
import Question from "../Components/Home/Questions/Question";
import BousteCareer from "../Components/bousteVotreCareer/BousteVotreCareer";
import Rapport from "../Components/Home/RapportInsersion/Rapport";
import Testemoials from  "../Components/Testemonials/TestemonialsHolder"
export default function Home(){
    return (
        <>
        <HeroSection />
        <Rapport/>
        <BousteCareer />
        <Question/>
        <Testemoials />
        </>
    )
}