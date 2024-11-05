
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";
import { useEffect } from "react";

const Hero = ({theme}) => {

    useEffect(() => {
        AOS.refresh();
    })
  return (
    <div className="dark:bg-black dark:text-white duration-300">
        <div className="container min-h-[620px] flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div className="order-1 sm:order-2">
                    <img 
                        src={theme === "dark" ? yellowCar : carPng} 
                        alt="car-image"
                        className="scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" 
                    />
                </div>
                <div>
                    <p className="text-primary text-2xl font-bold">
                        Effortless
                    </p>
                    <h1 className="text-5xl lg:text-7xl font-semibold font-serif">
                        Car Rental
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        veritatis explicabo quibusdam quae reprehenderit ab{" "}
                    </p>
                    <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
