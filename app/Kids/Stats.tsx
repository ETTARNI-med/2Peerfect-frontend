const stats = [
    {
        value: '15k+ Alumini',
        discription: 'Experience in Teaching Kids',
    },
    {
        value: '800,000+',
        discription: 'Hours of Learning Delivered',
    },
    {
        value: '30,000+',
        discription: 'Happy Parents',
    },
    {
        value: '4.9/5',
        discription: 'Average Rating by Students',
    },
]

const Stats = () => {
    return (
        <div>
            <div
                className=" -mt-16 px-12 flex justify-center items-center gap-20 w-full flex-wrap bg-white h-[12rem] rounded-xl
            shadow-xl"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex justify-center flex-col items-center"
                    >
                        <h1 className="text-2xl font-bold pt-8 ">
                            {stat.value}
                        </h1>
                        <p className="text-md text-black/90 font-normal pt-4">
                            {stat.discription}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats
