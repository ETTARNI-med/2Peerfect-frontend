import { IoPhonePortrait } from 'react-icons/io5'
import { IoCodeSlash } from 'react-icons/io5'
import { IoGameController } from 'react-icons/io5'
import { IoLogoPython } from 'react-icons/io5'
import { GrPersonalComputer } from 'react-icons/gr'
import { TbBadge3D } from 'react-icons/tb'

const tools = [
    {
        icon: <IoPhonePortrait className="text-blue-700 w-12 h-12" />,
        title: 'Mobile App Developement',
    },
    {
        icon: <IoCodeSlash className="text-blue-700 w-12 h-12" />,
        title: 'AI & Machine Learning',
    },
    {
        icon: <IoGameController className="text-blue-700 w-12 h-12" />,
        title: 'Game Development',
    },
    {
        icon: <IoLogoPython className="text-blue-700 w-12 h-12" />,
        title: 'Python And Data Science',
    },
    {
        icon: <GrPersonalComputer className="text-blue-700 w-12 h-12" />,
        title: 'Web Development',
    },
    {
        icon: <TbBadge3D className="text-blue-700 w-12 h-12" />,
        title: '3D coding (AR/VR)',
    },
]

const TechTools = () => {
    return (
        <div className="w-fit flex justify-center gap-12 px-20 py-10 bg-white rounded-xl flex-col items-center shadow-2xl">
            <h1 className="text-xl font-bold">
                +48 professional developers tech tools in one curriculum
            </h1>
            <div className="flex justify-center  gap-16">
                {tools.map((tool, index) => {
                    return (
                        <div className="flex flex-col gap-2 items-center">
                            <div
                                className="w-[6rem] h-[6rem] bg-lime-400 rounded-xl flex items-center justify-center flex-col gap-2 p-2"
                                key={index}
                            >
                                {tool.icon}
                            </div>
                            <p className="text-md font-semibold text-black/70 w-[6rem] text-center">
                                {tool.title}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechTools
