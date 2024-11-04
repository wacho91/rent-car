import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export const Navlinks = [
    {
      id: 1,
      name: "HOME",
      link: "/#",
    },
    {
      id: 2,
      name: "CARS",
      link: "/#cars",
    },
    {
      id: 1,
      name: "ABOUT",
      link: "/#about",
    },
    {
      id: 1,
      name: "BOOKING",
      link: "/#booking",
    },
];

const Navbar = ({theme, setTheme}) => {
  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
        <div className="container py-2 md:py-0">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-3xl font-bold font-serif">Car Rental</span>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {
                            Navlinks.map(({id, name, link}) => (
                                <li key={id} className="py-4">
                                    <a 
                                        href={link}
                                        className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))
                        }
                        {/*Implement dark mode*/}
                        {theme === "dark" ? (
                            <BiSolidSun 
                                onClick={() => setTheme("light")}
                                className="text-2xl cursor-pointer"
                            />
                        ): (
                            <BiSolidMoon 
                                onClick={() => setTheme("dark")}
                                className="text-2xl cursor-pointer"
                            />
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar
