'use client'
import { useState } from 'react'

interface formInfoType {
    email: string
    firstName: string
    lastName: string
    city: string
    country: string
    phoneNumber: string
    yearsOfExperience: number
    online: boolean
    professor: boolean
}

const SignUp = () => {
    const [formInfo, setFormInfo] = useState<formInfoType>({
        email: '',
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        phoneNumber: '',
        yearsOfExperience: 0,
        online: false,
        professor: false,
    })

    return (
        <div
            className="w-[45rem] h-[48rem] bg-white rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl 
flex justify-center flex-col"
        >
            <h1 className="text-blue-700 font-bold text-4xl text-center mt-4 ">
                Create a new account
            </h1>
            <form className="flex justify-center items-center p-20 flex-col gap-8">
                <input
                    id="firstName"
                    value={formInfo.firstName}
                    type="firstName"
                    placeholder="firstName"
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, firstName: e.target.value })
                    }
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <input
                    id="lastName"
                    value={formInfo.lastName}
                    type="lastName"
                    placeholder="lastName"
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, lastName: e.target.value })
                    }
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <input
                    id="email"
                    value={formInfo.email}
                    type="email"
                    placeholder="email"
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, email: e.target.value })
                    }
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <input
                    id="phoneNumber"
                    value={formInfo.phoneNumber}
                    type="phoneNumber"
                    placeholder="phoneNumber"
                    onChange={(e) =>
                        setFormInfo({
                            ...formInfo,
                            phoneNumber: e.target.value,
                        })
                    }
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <button
                    type="submit"
                    className="px-8 py-4 mt-8 bg-lime-400 rounded-xl text-blue-700 font-semibold 
                hover:scale-110 transform transition-transform ease-in-out duration-300 hover:shadow-xl "
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default SignUp
