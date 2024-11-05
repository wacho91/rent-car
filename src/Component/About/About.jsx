
import carPng from "../../assets/car1.png";

const About = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <img 
                        src={carPng} 
                        alt="imageCar" 
                    />
                </div>
                <div>
                    <h1>
                        About us
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, magnam! Tenetur odio quo et maxime?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                        tempora.
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
