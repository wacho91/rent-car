
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
        <div className="">
            <div>
                <div>
                    <h1>
                        Get Started with our app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        magnam harum accusantium odit?
                    </p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStoreBanner
