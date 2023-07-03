import html from '../assets/techs/html.png';
import css from '../assets/techs/css.png';
import js from '../assets/techs/javascript.png';
import bootstrap from '../assets/techs/bootstrap.png';
import tailwind from '../assets/techs/tailwind.png';
import git from '../assets/techs/git.png';
import express from '../assets/techs/express.png';
import firebase from '../assets/techs/firebase.png';
import mongodb from '../assets/techs/mongodb.png';
import react from '../assets/techs/react.png';

import Marquee from "react-fast-marquee";

const Techs = () => {
    const techs = [
        {tech:'HTML5',icon:html},
        {tech:'CSS3',icon:css},
        {tech:'Javascript',icon:js},
        {tech:'Bootstrap',icon:bootstrap},
        {tech:'Tailwind CSS',icon:tailwind},
        {tech:'Git',icon:git},
        {tech:'Express JS',icon:express},
        {tech:'Firebase',icon:firebase},
        {tech:'MongoDB',icon:mongodb},
        {tech:'React',icon:react}
    ]
    return (
        <div className='py-32 overflow-hidden'>
            <h1
            data-aos="fade-down"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className='text-6xl font-abril text-dark2 text-center'
            >Skills</h1>
            <div 
            data-aos="zoom-in"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className='mt-20'>
                <Marquee>
                    {techs.map((tech,idx)=><div className='w-[250px] h-[200px] mx-20 border border-dark2 rounded-lg p-5' key={idx}>
                        <img className='w-[100px] mx-auto' src={tech.icon} alt={tech.tech} />
                        <h2 className='font-abril text-2xl text-center'>{tech.tech}</h2>
                    </div>)}
                </Marquee>
            </div>
        </div>
    );
};

export default Techs;