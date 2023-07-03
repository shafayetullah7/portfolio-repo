import resume from '../assets/Resume-of-Shafayet.pdf'
import { Link } from 'react-scroll';

const Nav = () => {
    const navItems = <>
        <li className='cursor-pointer hover:font-bold'><Link to='home' smooth={true} duration={'1000'}>Home</Link></li>
        <li className='cursor-pointer hover:font-bold'><Link to='about' smooth={true} duration={'1000'}>About</Link></li>
        <li className='cursor-pointer hover:font-bold'><Link to='services' smooth={true} duration={'1000'}>Services</Link></li>
    </>

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume-of-shafayet.pdf'; // Replace with the desired file name
        link.click();
    };

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="flex items-center gap-10 px-1 font-bodoni">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='w-32 border text-sm font-bodoni border-dark2 rounded-md py-2 hover:bg-dark2 hover:text-dark1 font-bold' onClick={handleDownload}>My Resume</button>
            </div>
        </div>
    );
};

export default Nav;