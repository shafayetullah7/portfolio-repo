import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt } from 'react-icons/hi';
import Lottie from "lottie-react";
import contactAnimation from "../assets/contactAnimation.json";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSend = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
        }
        if(!email || !subject || !message){
            setError('All fields must be filled');
        }

        // Send the data or perform any desired actions
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Reset the form
        setEmail('');
        setSubject('');
        setMessage('');
        setError('');
    };

    

    return (
        <div className='overflow-hidden w-full'>
            <h1
                data-aos="fade-down"
                data-aos-offset="-300"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="text-6xl font-abril text-center relative top-16"
            >
                Contact me
            </h1>

            <div className='flex flex-col lg:flex-row justify-around items-center font-bodoni w-full overflow-hidden'>
                <div className='w-full'
                data-aos="fade-right"
                data-aos-offset="-300"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <Lottie animationData={contactAnimation} loop={true} />;
                </div>
                <div className='w-full'
                data-aos="fade-left"
                data-aos-offset="-300"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-3 text-dark2 items-center  p-4 rounded-md">
                            <HiOutlinePhone className="text-6xl mx-auto" />
                            <p className="text-center">+8801620828305</p>
                        </div>
                        <div className="flex flex-col gap-3 text-dark2 items-center  p-4 rounded-md">
                            <HiOutlineMail className="text-6xl mx-auto" />
                            <p className="text-center">shafayetullah410@gmail.com</p>
                        </div>
                        <div className="flex flex-col gap-3 text-dark2 items-center  p-4 rounded-md">
                            <HiOutlineChatAlt className="text-6xl mx-auto" />
                            <p className="text-center">Chat with me</p>
                        </div>
                    </div>

                    <form className="p-6 rounded-lg">
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input type="email" id="email" className="w-full px-3 py-2 rounded-md bg-opacity-10 bg-white outline-none focus:border-dark2 focus:border-2" placeholder='Enter your email' value={email} onChange={handleEmailChange}/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="block">Subject</label>
                            <input type="text" id="subject" className="w-full px-3 py-2 rounded-md bg-opacity-10 bg-white outline-none focus:border-dark2 focus:border-2" placeholder='Enter subject of your message' value={subject} onChange={handleSubjectChange}/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block">Message</label>
                            <textarea id="message" className="w-full px-3 py-2 h-28 rounded-md bg-opacity-10 bg-white outline-none focus:border-dark2 focus:border-2" placeholder='Enter your message' value={message} onChange={handleMessageChange}/>
                        </div>

                        {error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
                        <button className="bg-dark2 hover:bg-gray-600 text-dark1 hover:text-white px-4 py-2 rounded-md mt-1 w-fit flex items-center gap-2 font-abril" onClick={handleSend}><BsFillSendFill></BsFillSendFill>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
