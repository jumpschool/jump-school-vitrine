import ContactForm from "../Components/Contact/ContactForm";
import HeroSection from "../Components/Contact/HeroSection";
import Reservation from "../Components/Contact/Reservation"

export default function Contact(){
    return(
        <>
        <section>
        <HeroSection/>
        <Reservation/>
        <ContactForm/>
        </section>
        </>
    )
}