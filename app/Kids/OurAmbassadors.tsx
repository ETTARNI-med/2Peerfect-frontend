import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'

const ambassadors = [
    {
        name: 'Yassin Salim',
        image: '',
        technologie: 'Grade 6, AI',
    },
    {
        name: 'Yassin Salim',
        image: '',
        technologie: 'Grade 6, AI',
    },
    {
        name: 'Yassin Salim',
        image: '',
        technologie: 'Grade 6, AI',
    },
    {
        name: 'Yassin Salim',
        image: '',
        technologie: 'Grade 6, AI',
    },
    {
        name: 'Yassin Salim',
        image: '',
        technologie: 'Grade 6, AI',
    },
]

const OurAmbassadors = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8 ">
            <h1 className="text-3xl font-semibold "> Meet Our Ambassadors </h1>
            <div className="flex justify-center items-center gap-8">
                {ambassadors.map((ambassador) => (
                    <div className="flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-xl shadow-xl">
                        <div className="w-[10rem] h-[10rem] "></div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold">
                                {ambassador.name}
                            </h1>
                            <div className="text-lg text-center text-black/90 flex gap-2 justify-center items-center">
                                <Image
                                    src={'/maroc.png'}
                                    alt={'maroc'}
                                    width={100}
                                    height={100}
                                    className="w-4 h-4"
                                />
                                <p>{ambassador.technologie}</p>
                            </div>
                            <div className="flex justify-end -mr-5">
                                <div className=" w-8 h-8 bg-blue-700 text-white rounded-full flex justify-center items-center">
                                    <FaPlay className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurAmbassadors
