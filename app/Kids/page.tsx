import Hero from './Hero'
import Stats from './Stats'
import StudentsProjects from './StudentsProjects'
import Why2p from './Why2p'

const Kids = () => {
    return (
        <div className="w-full h-full bg-black/5 py-10 flex flex-col justify-center items-center gap-8">
            <Hero />
            <StudentsProjects />
            <Stats />
            <Why2p />
        </div>
    )
}

export default Kids
