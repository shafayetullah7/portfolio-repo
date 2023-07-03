
const Projects = () => {
    const projects = [
        {
            name:'News Pro',
            description:'NewsPro is a web application that provides a platform for users to explore and enroll in various classes related to news and broadcasting. It offers a range of features to enhance the learning experience and connect users with experienced instructors.',
            images : [
                'https://i.postimg.cc/qv9js770/newspro1.png',
                'https://i.postimg.cc/wvk2YcQT/newspro2.png',
                'https://i.postimg.cc/KYBQJyKT/newspro3.png',
                'https://i.postimg.cc/DZh6NYsM/newspro4.png',
                'https://i.postimg.cc/yN4yJrf8/newspro5.png',
                'https://i.postimg.cc/T3Wc3XJs/newspro6.png',
                'https://i.postimg.cc/RVhR2t64/newspro7.png',
                'https://i.postimg.cc/1RJBWBzv/newspro8.png',
                'https://i.postimg.cc/8PYHGCMW/newspro9.png',
              ],
            live:'https://news-pro-9c32b.web.app/',
            client:'https://github.com/shafayetullah7/news-pro-public-client.git',
            server:'https://github.com/shafayetullah7/news-pro-public-server-repo.git',
        },
        {
            name:'Hero Haven',
            description:'Hero Haven is a website to showcase action figures of characters of different fiction universes. Users can see action figures posted by others and also publish there own',
            images:[
                'https://i.postimg.cc/sDMYTRq2/hero1.png',
                'https://i.postimg.cc/Sx8WpfyF/hero2.png',
                'https://i.postimg.cc/wBpDxRvt/hero3.png',
                'https://i.postimg.cc/4d8c181t/hero4.png',
                'https://i.postimg.cc/BbXK7xhz/hero5.png',
                'https://i.postimg.cc/Fz8JM78H/hero6.png',
                'https://i.postimg.cc/MZFRMFHJ/hero7.png',
                'https://i.postimg.cc/xTNmK3NJ/hero8.png',
            ],
            live:'https://hero-haven.web.app/',
            server:'https://github.com/shafayetullah7/hero-haven-server-repo2.git',
            client:'https://github.com/shafayetullah7/hero-haven-client-repo.git'
        },
        {
            name:'Savory Mediterranean',
            description:'',
            images:[
                'https://i.postimg.cc/5y0Bdctn/savory1.png',
                'https://i.postimg.cc/kGpx7j69/savory2.png',
                'https://i.postimg.cc/J7633hTg/savory3.png',
                'https://i.postimg.cc/q7xyNBh1/savory4.png',
                'https://i.postimg.cc/sXfS7F5s/savory5.png',
            ],
            live:'https://savory-mediterranean.web.app/',
            client:'https://github.com/shafayetullah7/-savory-mediterranean-client-repo.git',
            server:'https://github.com/shafayetullah7/savory-mediterranean-server-repo.git'
        }
    ]
    return (
        <div className="overflow-hidden py-24 lg:px-24 lg:mt-24">
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
                Recent Projects
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-10 mt-16">
                {projects.map((project,idx)=><div key={idx}
                    data-aos="fade-up"
                    data-aos-offset="-300"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <div className="w-[300px] h-[260px] border border-gray-200 rounded-lg p-5 relative overflow-hidden">
                        <div
                            data-aos="fade-up"
                            data-aos-offset="-300"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                            className='relative w-full h-full'
                        >
                            {project.images && <img className="w-full h-[150px] mx-auto object-cover object-center" src={project.images[project.images.length-1]}/>}
                            <div className="flex justify-between items-center mt-4">
                            <h1 className="text-3xl font-abril text-center">{project.name}</h1>
                            <a href={project.live} rel="" target="_blank"><button className="font-bodoni w-fit px-3 py-2 rounded-lg border border-dark2 text-xs">Details</button></a>
                            </div>
                            {/* <p className="font-bodoni text-justify p-5 absolute inset-0 bg-gray-300 text-dark1 opacity-0 hover:opacity-100 duration-150">{service.description}</p> */}
                        </div>
                    </div>
                </div>)}
            </div>
            {/* You can open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal ">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </form>
            </dialog> */}
        </div>
    );
};

export default Projects;