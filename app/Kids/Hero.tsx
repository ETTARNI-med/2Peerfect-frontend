import TechTools from './TechTools'

const Hero = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full bg-blue-700 h-[25rem] mt-20 p-4 flex items-center gap-16 justify-center">
                <div className=" flex flex-col justify-center gap-6 w-[39rem]">
                    <h1 className="text-4xl text-white font-semibold leading-relaxed">
                        Les Apprentis d'Aujourd'hui, Les Experts de{'  '}
                        <span className="p-2 bg-lime-400 rounded-3xl text-black">
                            {' '}
                            Demain
                        </span>
                    </h1>
                    <p className="text-white text-xl leading-relaxed">
                        Plonger dans notre formation,évoque une immersion totale
                        dans l'univers de l'apprentissage et de la découverte.
                        C'est un engagement à s'immerger complètement dans les
                        connaissances, les compétences et les expériences
                        offertes par notre programme.
                    </p>
                    <button className="py-[0.75rem] px-8 text-xl bg-white text-blue-600 self-start font-semibold rounded-xl">
                        Book your courses
                    </button>
                </div>
                <div className="flex justify-center mt-[15rem]">
                    <div className="w-[25rem] h-[25rem] rounded-full bg-lime-400"></div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center pt-[7rem]">
                <TechTools />
            </div>
        </div>
    )
}

export default Hero
