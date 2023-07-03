import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt } from 'react-icons/hi';
import Lottie from "lottie-react";
import contactAnimation from "../assets/contactAnimation.json";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
        }

        // Send the data or perform any desired actions
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Reset the form
        setEmail('');
        setSubject('');
        setMessage('');
        setEmailError('');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className='overflow-hidden py-24'>
            <h1
                data-aos="fade-down"
                data-aos-offset="-300"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="text-6xl font-abril text-center"
            >
                Contact me
            </h1>

            <div className='flex flex-col lg:flex-row justify-around items-center'>
                <div className='w-full'>
                    <Lottie animationData={contactAnimation} loop={true} />;
                </div>
                <div className='w-full'>
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
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full px-3 py-2 rounded-md"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
                        </div>

                        <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-3 py-2 rounded-md"
                            value={subject}
                            onChange={handleSubjectChange}
                        />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 rounded-md"
                            value={message}
                            onChange={handleMessageChange}
                        />
                        </div>

                        <button
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                        onClick={handleSend}
                        >
                        Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
