const projects = [
    {
        title: 'Project 1',
        description: `Le Lorem Ipsum est simplement du faux texte employé dans l
        a composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l`,
        image: 'image1.jpg',
        stuent: 'Yssine Rami',
    },
    {
        title: 'Project 2',
        description: `Le Lorem Ipsum est simplement du faux texte employé dans l
        a composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l`,
        image: 'image2.jpg',
        stuent: 'Yssine Rami',
    },
    {
        title: 'Project 3',
        description: `Le Lorem Ipsum est simplement du faux texte employé dans l
        a composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l`,
        image: 'image3.jpg',
        stuent: 'Yssine Rami',
    },
]

const StudentsProjects = () => {
    return (
        <div className="w-full h-full flex justify-center flex-col items-center px-6 pb-16 pt-6 bg-blue-100 mt-6 ">
            <h1 className="text-3xl font-semibold pt-8">
                Discover  60,000+ Students Projects
            </h1>
            <div className="p-4 flex justify-center items-center gap-8 w-full flex-wrap">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-[26rem] h-[29rem] flex justify-center 
                        flex-col items-center p-6 bg-white mt-6
                        rounded-xl shadow-md"
                    >
                        <img
                            src={project.image}
                            alt="project"
                            className="w-64 h-64"
                        />
                        <div className="flex flex-col flex-start w-full">
                            <h1 className="text-xl font-semibold pt-8 text-blue-400">
                                {project.title}
                            </h1>
                            <p className="text-md text-black/90 font-normal pt-4">
                                {project.description}
                            </p>
                            <p className="text-lg  pt-4 self-end ">
                                {project.stuent}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentsProjects
