import Link from 'next/link'
import { useAuth } from './context/AuthContext'

const Signup = () => {
    const { signup, setSignup } = useAuth()

    return (
        <button
            className=" h-12 w-20 bl rounded-[17px] shadow border-blue-800 border-4"
            onClick={() => setSignup(!signup)}
        >
            <p className="text-lime-500 cursor-pointer font-semibold">
                Sign Up
            </p>
        </button>
    )
}

export default Signup
