'use client'
import { useState } from 'react'
import Dropdown from './CityDropDown'
import { formInfoType } from '@/services/handleSignupFrom'

const SignUp = () => {
    const [formInfo, setFormInfo] = useState<formInfoType>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        city: '',
        country: '',
        phoneNumber: '',
        yearsOfExperience: 0,
        online: false,
        professor: false,
    })

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormInfo({ ...formInfo, city: e.target.value })
    }

    return (
        <div
            className="w-[45rem] h-[44rem] bg-white rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl 
flex justify-center flex-col"
            onClick={(e) => e.stopPropagation()}
        >
            <h1 className="text-blue-700 font-bold text-4xl text-center mt-8 ">
                Créer un compte
            </h1>
            <form className="flex justify-center items-center px-20 py-12 flex-col gap-8 ">
                <input
                    id="firstName"
                    value={formInfo.firstName}
                    type="firstName"
                    placeholder="Nom"
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, firstName: e.target.value })
                    }
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <input
                    id="lastName"
                    value={formInfo.lastName}
                    type="lastName"
                    placeholder="Prenom"
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
                    id="password"
                    value={formInfo.phoneNumber}
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) =>
                        setFormInfo({
                            ...formInfo,
                            password: e.target.value,
                        })
                    }
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <button
                    type="submit"
                    className="px-8 py-4 mt-8 bg-lime-400 rounded-xl text-blue-700 font-semibold 
                hover:scale-110 transform transition-transform ease-in-out duration-300 hover:shadow-xl "
                >
                    Créer
                </button>
            </form>
        </div>
    )
}

export default SignUp
