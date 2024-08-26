const About = ({ company }) => {
  const { about_p_one, about_p_two, about_p_three, themecolor } = company;
  return (
    <div className="w-full h-full relative ">
      <div className=" h-2/3 w-full flex items-center justify-center flex-col">
        <div className="py-12">
          <span className="text-lg border rounded-full px-5 py-2 font-gothicdemi ">
            About Us
          </span>
        </div>
        <div className=" md:w-3/4 max-sm:px-2">
          <p className="text-center  text-4xl md:text-6xl font-gothicdemi md:leading-[3.7rem] ">
            <span className="">
              {about_p_one}
              <span style={{ color: themecolor }}>{about_p_two}</span>
              {about_p_three}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <img
          src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978126/Yuga/Bottom_design_1_fea5k1.svg"
          className="h-40 md:h-80 w-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
