import { FaCameraRetro } from "react-icons/fa"
import { GiNotebook } from "react-icons/gi"
import { SlNote } from "react-icons/sl"

const skillsData = [
    {
      name: "Best Price",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "0",
    },
    {
      name: "Fast and Safe",
      icon: (
        <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "500",
    },
    {
      name: "Experience Drivers",
      icon: (
        <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
      ),
      link: "#",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "1000",
    },
];

const Services = () => {
  return (
    <>
        <span id="about"></span>
        <div>
            <div>
                <div>
                    <h1>
                        Why Choose Us
                    </h1>
                </div>
                <div>
                    {skillsData.map((skill) => (
                        <div key={skill.name}>
                            <div>{skill.icon}</div>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                            <a href={skill.link}>
                                Learn More 
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Services
