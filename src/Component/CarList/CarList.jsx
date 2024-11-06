
import whiteCar from "../../assets/white-car.png"
import car2 from "../../assets/car5.png"
import car3 from "../../assets/car6.png"

const carList = [
    {
      name: "BMW UX",
      price: 100,
      image: whiteCar,
      aosDelay: "0",
    },
    {
      name: "KIA UX",
      price: 140,
      image: car2,
      aosDelay: "500",
    },
    {
      name: "BMW UX",
      price: 100,
      image: car3,
      aosDelay: "1000",
    },
];

const CarList = () => {
  return (
    <div className="pb-24">
        <div className="container">
            <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
                Lorem ipsum dolor
            </h1>
            <p className="text-sm pb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
                nemo ab?
            </p>
            {/* Car listing */}
            <div>
                <div>
                    {carList.map((data) => (
                        <div key={data.name}>
                            <div>
                                <img 
                                    src={data.image} 
                                    alt="image" 
                                    className="w-full h-[122px] object-contain sm:translate-x-8 group-hover:translate-x-16"
                                />
                            </div>
                            <div>
                                <h1>{data.name}</h1>
                                <div>
                                    <p>{data.price}/Day</p>
                                    <a href="#">View Details</a>
                                </div>
                            </div>
                            <p>
                                12Km
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* End of car listing */}
            <div>
                <button>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default CarList
