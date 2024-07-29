import { useEffect, useRef, useState } from "react";
import CardImage from "../../assets/images/Contact/Contact.svg"
import cardImage2 from "../../assets/images/Contact/contact-lighter.svg"

export default function HeroSection() {
    const images = [CardImage, cardImage2];
    const intervalTime = 4000;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);

        return () => clearInterval(intervalRef.current);
    }, []);
    return (
        <>
        <div className="relative max-sm:flex max-sm:justify-center max-sm:items-center">
            <div className=" relative w-full h-[80vh] overflow-hidden max-sm:h-[40vh] sm:max-xl:h-[60vh]">
                {images.map((image, index) => (
                <HeroImage 
                key={index}
                image={image}
                isVisible={index === currentImageIndex}
                />
                ))}
                <div className=" flex justify-center items-center absolute h-[90%] w-[40%] max-sm:w-[80%]">
                    <h2 className="text-white text-5xl font-bold max-sm:text-4xl">ON PAP<span className="underline decoration-rose-600">OTE ?</span></h2>
                </div>
            </div>
            <div className="bg-slate-900 w-[70%] py-[1%] rounded-md absolute left-[16%] top-[90%] flex justify-center items-center  4xl:top-[90%] 3xl:top-[90%] sm:max-xl:w-[100%] sm:max-xl:left-[0%] sm:max-xl:rounded-none sm:max-xl:py-[4%] max-sm:w-[100%] max-sm:left-[0%] max-sm:justify-start max-sm:rounded-none z-10">
                    <h3 className="text-3xl px-[10%] text-white font-bold text-center 4xl:text-5xl 3xl:text-4xl max-sm:text-2xl max-sm:font-normal">Se faire rappeler pour échanger sur votre projet répondre à vos questions</h3>
            </div>
            </div>
        </>
    );
}

function HeroImage({ image, isVisible }) {
    return (
        <>
            <div
                className={` absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${image})`}}
            ></div>
        </>
    )
}