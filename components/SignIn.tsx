import Link from 'next/link'
import { useAuth } from './context/AuthContext'

const SignIn = () => {
    const { signin, setSignin } = useAuth()

    return (
        <button
            className=" h-12 w-20 bl rounded-[17px] shadow border-blue-800 border-4"
            onClick={() => setSignin(!signin)}
        >
            <p className="text-lime-500 cursor-pointer  font-semibold">
                Sign In
            </p>
        </button>
    )
}

export default SignIn
