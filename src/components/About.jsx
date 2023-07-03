import { useState } from "react";
import { AiFillLinkedin,AiOutlineGithub,AiFillFacebook } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    AOS.init();

    const [more,setMore] = useState(false);
    return (
        <div className="overflow-hidden">
            <div
                data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="bg-dark1 flex flex-col lg:flex-row gap-5 px-2 lg:px-0 items-center mt-24 py-24 text-gray-200">
                    <div className="w-full">
                        <h1 className="text-6xl font-abril text-center">About me</h1>
                        <div className="w-fit mx-auto flex gap-5 text-4xl mt-5">
                            <AiFillFacebook></AiFillFacebook>
                            <AiFillLinkedin></AiFillLinkedin>
                            <AiOutlineGithub></AiOutlineGithub>
                        </div>
                    </div>
                    <div className="w-full text-justify duration-200 lg:pr-24 font-bodoni">
                        {!more && <p>Hello! I'm Shafayet Ullah, a passionate web developer and student at Daffodil International University. With a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack, I'm dedicated to creating exceptional web experiences that combine aesthetics and functionality.</p>}
                        {more && <div>
                            <p>Hello! I'm Shafayet Ullah, a passionate web developer and student at Daffodil International University. With a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack, I'm dedicated to creating exceptional web experiences that combine aesthetics and functionality.</p><br />
                            <p>In the rapidly evolving world of web development, I understand the importance of staying up-to-date with the latest trends and technologies. I am passionate about continuous learning and actively seek out opportunities to expand my skill set. Whether it's attending industry conferences, participating in coding challenges, or exploring new frameworks and tools, I am dedicated to keeping my skills sharp and embracing new possibilities.</p><br />
                            <p>I am excited to collaborate on new projects, contribute to innovative ideas, and help bring your web development vision to life. If you're looking for a passionate and dedicated web developer, I would love to hear from you. Feel free to reach out through the contact options listed on this page. Let's connect and create something remarkable together!</p>
                        </div>}
                        <button className=' border text-xs font-bodoni border-dark2 rounded-md py-2 px-5 block w-fit mt-5 hover:bg-dark2 hover:text-dark1' onClick={()=>setMore(!more)}>See {more?<>Less</>:<>More</>}</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default About;