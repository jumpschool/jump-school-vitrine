import MockupBook from '../../../assets/images/MockupJumpIt.png'
export default function Rapport(){
    return(
        <>
        <section className='bg-rose-200 flex justify-center items-center w-full h-[55vh] max-sm:h-full max-sm:flex-col sm:max-xl:h-full sm:max-xl:py-[5%] '>
            <div className='w-[50%] flex justify-end max-sm:w-[90%] sm:max-xl:w-[60%]'>
                <img src={MockupBook} className='h-[96%]' alt="" />
            </div>
            <div className='w-[60%] flex items-start gap-5 flex-col  max-sm:w-[100%] max-sm:px-[3%] '>
                <h1 className='text-5xl font-semibold text-slate-800 sm:max-xl:text-4xl max-sm:text-center'>RAPPORT D'INSERTION <span className='underline decoration-rose-600'>2024</span></h1>
                <p className=' w-[70%] text-xl text-slate-900 font-medium sm:max-xl:text-lg sm:max-xl:text-justify sm:max-xl:w-[90%]  max-sm:w-[100%] max-sm:text-justify'>Vous souhaitez en savoir plus sur l’insertion professionnelle de nos Wilders ? Découvrez en détail les réussites de nos élèves en matière de retour à l'emploi, les entreprises qui les ont embauchés et leurs profils !</p>
                <div className='w-[100%] sm:max-xl:flex sm:max-xl:justify-center max-sm:flex max-sm:w-[100%] max-sm:justify-center max-sm:pb-[5%] sm:max-xl:w-[100%]'>
                <button className="hover:bg-rose-200  hover:border-2 hover:border-rose-600 border-2 border-rose-600 hover:text-rose-600  hover:rounded-md Text-navbar-element bg-rose-600 text-lg px-[2%] text-white font-bold rounded-lg ">
                 Choisir sa formation
                </button></div>
            </div>

        </section>
        </>
    )
}