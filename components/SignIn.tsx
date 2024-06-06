import handleSubmitLoginForm from '@/services/handleLoginForm'
import { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div
            className="w-[40rem] h-[40rem] bg-white rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl 
        flex justify-center flex-col"
        >
            <h1 className="text-blue-700 font-bold text-4xl text-center mt-16 ">
                Login to Your Account
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmitLoginForm({ email, password })
                    setEmail('')
                    setPassword('')
                }}
                className="flex justify-center items-center p-20 flex-col gap-10"
            >
                <input
                    id="email"
                    value={email}
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <input
                    id="password"
                    value={password}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[20rem] h-16  p-4 text-lg rounded-2xl outline-none bg-black/10"
                />
                <button
                    type="submit"
                    className="px-8 py-4 mt-8 bg-lime-400 rounded-xl text-blue-700 font-semibold 
                hover:scale-110 transform transition-transform ease-in-out duration-300 hover:shadow-xl "
                >
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default SignIn
