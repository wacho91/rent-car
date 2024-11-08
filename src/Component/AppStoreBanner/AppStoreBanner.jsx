
import AppStoreImage from "../../assets/website/app_store.png";
import PlayStoreImage from "../../assets/website/play_store.png";
import pattern from "../../assets/website/pattern.jpeg";

const bannerImage = {
    backgroundImage: `url(${pattern})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}

const AppStoreBanner = () => {
  return (
    <div className="container">
        <div 
            className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
            style={bannerImage}
        >
            <div>
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 
                        data-aos="fade-up"
                        className="text-2xl text-center sm:text-4xl font-semibold font-serif"
                    >
                        Get Started with our app
                    </h1>
                    <p data-aos="fade-up" className="text-center sm:px-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        magnam harum accusantium odit?
                    </p>
                    <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4">
                        <a href="#">
                            <img 
                                src={PlayStoreImage} 
                                alt="image" 
                                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                            />
                        </a>
                        <a href="#">
                            <img 
                                src={AppStoreImage} 
                                alt="image" 
                                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStoreBanner
