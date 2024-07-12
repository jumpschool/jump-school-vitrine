import QuestionBg from "../../../assets/Backgrounds/QuestionBg"
import HandsUptheSky from "../../../assets/images/HandsUptothesky.png"
export default function Question(){
    return(
        <>
        <section className="main_container relative h-[60%] overflow-hidden  w-full max-sm:h-[60vh] sm:max-lg:h-[29vh]">
            <QuestionBg/>
            <div className="absolute top-[7%] flex  px-[8%] w-full h-full max-sm:top-[0%] ">
                <div className="main_container_imageofhand flex h-full w-[60%] !justify-end !items-end max-sm:hidden">
                    <img src={HandsUptheSky} className="sm:max-lg:h-[70%]" alt="Hands on the sky" />
                </div>
                <div className='main_container_text  w-[60%] py-[2%] flex items-start justify-center gap-5 flex-col sm:max-lg:gap-0 sm:max-lg:py-[0%]  max-sm:py-[0%]  max-sm:w-[100%] max-sm:px-[0%] '>
                        <h1 className='text-5xl font-semibold text-slate-800 max-sm:w-[100%] max-sm:text-4xl sm:max-xl:text-2xl max-sm:text-center'>Vous avez encore des 
                        <span className='underline decoration-rose-600'> questions ?</span></h1>
                        <p className=' w-[70%] text-lg text-slate-900 font-medium sm:max-xl:text-lg sm:max-xl:text-justify sm:max-xl:w-[90%]  max-sm:w-[100%] max-sm:text-justify'>Ne restez pas dans le doute, notre équipe se fera un plaisir de répondre à toutes vos questions et de vous accompagner sur votre projet professionnel. Prêt à explorer de nouvelles opportunités dans la tech ?</p>
                        <div className='w-[100%] sm:max-xl:flex sm:max-xl:justify-center max-sm:flex max-sm:w-[100%] max-sm:justify-center max-sm:pb-[5%] sm:max-xl:w-[100%]'>
                        <button className="hover:bg-rose-200  hover:border-2 hover:border-rose-600 hover:text-rose-600 border-2 border-rose-600  hover:rounded-md Text-navbar-element bg-rose-600 text-lg px-[2%] text-white font-bold rounded-lg ">
                         être rappelé 
                        </button>
                        </div>
                </div>
            </div>

        </section>
        </>
    )
}