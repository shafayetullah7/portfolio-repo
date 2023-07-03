import user from '../assets/user.png'
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../assets/Resume-of-Shafayet.pdf'
import { Link } from 'react-scroll';

const Banner = () => {
    
    AOS.init();

    // const handleDownload = () => {
    //     const file = new File([''], resume, { type: 'application/pdf' }); // Replace with the actual file object or path
    
    //     saveAs(file);
    //   };
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume-of-shafayet.pdf'; // Replace with the desired file name
        link.click();
    };

    return (
        <div className='w-full h-fit overflow-hidden'>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="w-full flex justify-center items-center flex-col py-16 lg:py-52">
                    <img className='w-[100px] h-[100px] rounded-full mx-auto' src={user} alt="avatar" />
                    <div className='lg:w-1/2'>
                        <div className='text-center font-bodoni text-xs'>
                            <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Hi, I’m Shafayet',
                                3000, // wait 1s before replacing "Mice" with "Hamsters"
                                'I’m a Web Developer',
                                1000,
                                'Explore my portfolio',
                                1500
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            />
                        </div>
                        <h1 className='lg:text-8xl text-6xl text-center font-abril mt-10'>Building the web, one pixel at a time</h1>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mt-16'>
                            <Link to='contact' smooth={true} duration={1500}><button className='w-52 border text-xl font-bodoni border-dark2 rounded-md py-2 hover:bg-dark2 hover:text-dark1'>Contact me</button></Link>
                            <button className='w-52 border text-xl font-bodoni border-dark2 rounded-md py-2 hover:bg-dark2 hover:text-dark1' onClick={handleDownload}>My Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;