import { useAuth } from '../context/AuthContext'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Register = () => {
    const { signup, setSignup } = useAuth()
    const { signin, setSignin } = useAuth()

    return (
        <div
            className={`w-full h-full fixed z-50 backdrop-blur-xl flex justify-center items-center 
        ${!signin && !signup && 'hidden'}`}
            onClick={() => {
                setSignin(false)
                setSignup(false)
            }}
        >
            {signin && <SignIn />}
            {signup && <SignUp />}
        </div>
    )
}

export default Register
