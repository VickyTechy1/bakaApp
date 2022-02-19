import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSections';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSections/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} /> 
            <Services />
            <InfoSection {...homeObjThree} /> 
            <Footer />
        </>
    )
}

export default Home
