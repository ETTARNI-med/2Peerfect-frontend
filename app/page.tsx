'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import background from '../public/background.png'

import DesignCard from '@/components/Home/DesignCard'
import PresentielCard from '@/components/Home/PresentielCard'
import Elearning from '@/components/Home/Elearning'
import LangueCard from '@/components/Home/LangueCard'
import WebCard from '@/components/Home/WebCard'
import FormationEnlign from '@/components/Home/FormationEnlign'
import HeroSection from '@/components/Home/HeroSection'
import Partners from '@/components/Home/Partners'
import CoursPopulaire from '@/components/Home/CoursPopulaire'
import JeSuisUnCentre from '@/components/Home/JeSuisUnCentre'
import Events from '@/components/Home/Events'
import SignIn from '@/components/register/SignIn'
import SignUp from '@/components/register/SignUp'

export default function Home() {
    const [singIn, setSignIn] = useState<boolean>(false)
    const [signUp, setSignUp] = useState<boolean>(false)

    return (
        <>
            {singIn && (
                <div className="w-full h-full fixed z-50 backdrop-blur-xl flex justify-center items-center">
                    <SignIn />{' '}
                </div>
            )}
            {signUp && (
                <div className="w-full h-full fixed z-50 backdrop-blur-xl flex justify-center items-center">
                    <SignUp />{' '}
                </div>
            )}
            <div>
                <HeroSection />
            </div>
            <div className="relative flex justify-between pl-16">
                <DesignCard />
                <PresentielCard />
            </div>
            <div className="relative flex justify-around">
                <Elearning />
                <LangueCard />
            </div>
            <div className="relative flex justify-around -mt-52">
                <WebCard />
                <FormationEnlign />
            </div>
            <Partners />
            <CoursPopulaire />
            <JeSuisUnCentre />
            <Events />
        </>
    )
}
