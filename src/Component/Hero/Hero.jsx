
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";

const Hero = ({theme}) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
        <div className="container min-h-[620px] flex">
            <divc className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div className="order-1 sm:order-2">
                    <img 
                        src={theme === "dark" ? yellowCar : carPng} 
                        alt="car-image"
                        className="scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" 
                    />
                </div>
                <div>
                    <p>
                        Effortless
                    </p>
                </div>
            </divc>
        </div>
    </div>
  )
}

export default Hero
