import Image from 'next/image'

const causes = [
    `Stimuler la créativité et l'innovation`,
    `Contenu adapté à l'âge`,
    `Technologie éducative de pointe`,
]

const Why2p = () => {
    return (
        <div className="w-full flex justify-between flex-col items-center gap-8">
            <h1 className="text-3xl font-bold">Pourquoi 2peerfect Kids?</h1>
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-4">
                    {causes.map((cause, index) => {
                        return (
                            <div
                                key={index}
                                className={`
                                    p-4 text-lg font-semibold rounded-xl w-[30rem] h-20 flex justify-start gap-4 items-center
                                    ${
                                        index == 0
                                            ? 'text-white bg-blue-600'
                                            : 'text-black border-blue-600 border-2 bg-transparent'
                                    }`}
                            >
                                <div className="w-16 h-16 bg-lime-400 flex justify-center items-center rounded-full">
                                    <Image
                                        src={'/Rocket2.png'}
                                        alt={''}
                                        width={20}
                                        height={20}
                                        className="w-6 h-6"
                                    />
                                </div>
                                <p>{cause}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="w-[25rem] h-[25rem] flex flex-col justify-end p-6">
                    <p className="text-lg font-semibold py-4  rounded-xl bg-lime-400 text-center">
                        let's go to the next level
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Why2p
