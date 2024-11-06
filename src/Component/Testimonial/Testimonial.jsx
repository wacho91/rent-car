
const testimonialData = [
    {
      name: "Dilshad",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "0",
    },
    {
      name: "Satya",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "300",
    },
    {
      name: "Sabir",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "1000",
    },
];

const Testimonial = () => {
  return (
    <>
        <span id="about"></span>
        <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
            <div className="container">
                {/* Heading */}
                <div className="space-y-4 pb-12">
                    <p className="text-3xl font-semibold text-center sm:text-4xl font-serif">
                        What Our Clients Say About Us
                    </p>
                    <p className="text-center sm:px-44">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis iure consectetur tempora amet.
                    </p>
                </div>
                <div>
                    {testimonialData.map((skill) => (
                        <div
                            key={skill.name}
                        >
                            <div>
                                <img 
                                    src="https://picsum.photos/200" 
                                    alt="image"
                                    className="" 
                                />
                            </div>
                            <div>
                                <p>{skill.description}</p>
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>   
    </>
  )
}

export default Testimonial
