import React from 'react'
import HeaderSection from '../../Components/Header/header'
import TrendingCards from '../../Components/TrendCards/trending'
import NavbarSection from '../../Layout/Navbar/navbar'
import { Helmet } from 'react-helmet'

function HomePage() {
    return (
        <>
            <Helmet>
                <title> Home Page </title>
            </Helmet>

            <>

                <NavbarSection />
                <HeaderSection />
                <TrendingCards />

            </>
        </>
    )
}

export default HomePage