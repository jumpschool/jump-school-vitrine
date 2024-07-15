import contatImg from "../../assets/images/Contact/Contact.svg"
export default function HeroSection(){
    return(
        <>
        <section className="container relative">
        <div className="pt-[4%]">
            <img src={contatImg} alt="" />

        </div>
        <div className="absolute top-[40%] px-[10%]">
            <h1 className="text-5xl text-white  font-semibold">ON PAP<span className="underline decoration-rose-600">OTO ?</span> </h1>
        </div>
        </section>
        </>
    )
}