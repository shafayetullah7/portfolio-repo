import { useState } from "react";
// import { AiFillLinkedin,AiOutlineGithub,AiFillFacebook } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import webDev from '../assets/icons/web-dev.png'

const Services = () => {
    AOS.init();

    const services = [
        {
          title: "Web Development",
          description: "Creating responsive and user-friendly websites using modern web technologies.",
          icon: webDev
        },
        {
          title: "Front-End Development",
          description: "Developing intuitive and visually appealing user interfaces with HTML, CSS, and JavaScript.",
        },
        {
          title: "Back-End Development",
          description: "Building robust and scalable back-end systems using server-side programming languages.",
        },
        {
          title: "Full-Stack Development",
          description: "Handling both front-end and back-end development to provide end-to-end solutions.",
        },
        {
          title: "Website Optimization",
          description: "Optimizing website performance and speed for better user experience and search engine rankings.",
        },
        {
          title: "Website Maintenance and Support",
          description: "Providing ongoing support, updates, and bug fixes for websites to ensure smooth operation.",
        },
    ];
      

    const [more,setMore] = useState(false);
    return (
        <div className="overflow-hidden py-24 px-24">
            <h1
                data-aos="fade-down"
                data-aos-offset="-300"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="text-7xl font-abril text-center"
            >
                Services
            </h1>
            <div className="grid md:grid-cols-3 justify-items-center gap-10">
                {services.map((service,idx)=><div className="w-[250px] h-[200px] border border-gray-200 rounded-lg p-5 relative overflow-hidden" key={idx}>
                    {service.icon && <img className="w-16 h-16 object-cover object-center" src={service.icon}/>}
                    <h1 className="text-3xl font-abril text-center">{service.title}</h1>
                    <p className="font-bodoni text-justify p-5 absolute inset-0 bg-gray-300 text-dark1 opacity-0 hover:opacity-100 duration-150">{service.description}</p>
                </div>)}
            </div>
        </div>
    )
};

export default Services;