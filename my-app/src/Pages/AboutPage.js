import React from 'react';
import Tittle from "../Components/Tittle";
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div>
    <Tittle title={'About Me'} span={'About Me'}/>
        <ImageSection/>
        <Tittle title={'My Skills'} span={'MySkills'}/>
        <SkillsSection skill={'JavaScript'} progress={'70%'}/>
        </div>
    )
}

export default AboutPage

