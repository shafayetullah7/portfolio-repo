import { AiFillLinkedin,AiOutlineGithub,AiFillFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-dark1 text-dark2 py-24">
            <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-10 items-start font-bodoni">
                <div>
                    <p className="text-sm"><span className="font-bold">Email:</span> shafayetullah410@gmail.com</p>
                    <p className="text-sm"><span className="font-bold">Phone:</span> +8801620828305</p>
                    <p className="text-sm"><span className="font-bold">Address:</span> 123 Street, City, State, Country</p>
                    <div className="w-fit mt-2 flex gap-5 text-4xl">
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillLinkedin></AiFillLinkedin>
                        <AiOutlineGithub></AiOutlineGithub>
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                    <p className="text-sm">Designed and developed by Your Name</p>
                </div>
            </div>
        </footer>
    );
  };
  
  export default Footer;
  