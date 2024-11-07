import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa"

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <section className="container">
            <div className=" grid md:grid-cols-3 py-5">
                {/* company Details */}
                <div className=" py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
                        Car Rental
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Possimus, voluptate.{" "}
                    </p>
                    <br />
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                        <p>+91-9876543210</p>
                    </div>
                    {/* Social Handle */}
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                {/* Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
                    <div>
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Important Links
                            </h1>
                            <ul className={`flex flex-col gap-3`}>
                                {FooterLinks.map((item) => (
                                    <li 
                                        key={item.link}
                                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                                    >
                                        <span>&#11162;</span>
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Location 
                            </h1>
                            <ul className={`flex flex-col gap-3`}>
                                {FooterLinks.map((item) => (
                                    <li 
                                        key={item.link}
                                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                                    >
                                        <span>&#11162;</span>
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
