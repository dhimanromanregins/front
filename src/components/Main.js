import React from 'react';
import LandingPage from './main-pages/LandingPage';
import IntroSection from './main-pages/IntroSection';
import SkillsSection from './main-pages/SkillsSection';
import ProjectsSection from './main-pages/ProjectsSection';
import CompaniesSection from './main-pages/CompaniesSection';
import Navbar from './Navbar';
import Footer from './Footer';

function Main() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <IntroSection />
            <SkillsSection />
            <ProjectsSection />
            <CompaniesSection />
            <Footer />
        </>
    )
}
export default Main;