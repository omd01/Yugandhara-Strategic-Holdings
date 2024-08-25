const Services = ({ company }) => {
  const { name, themecolor, card_one } = company;
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <div className="px-3 py-5 bg-[#F0F0F0] flex">
          <h1 className="text-8xl font-gothicmedium">services</h1>
          <div
            className=" h-4 w-4 self-end mx-2 mb-4"
            style={{ background: themecolor }}
          ></div>
        </div>
        <div className="flex ">
          <div className="h-full w-1/3 py-10 px-20">
            <div className="h-1/2  border-r-4 border-[#F0F0F0]">
              <h3 className="text-5xl font-gothicmedium text-wrap">
                Industry Focus.
              </h3>
              <p className="text-xl text-slate-500 font-gothicdemi">
                Automobile, Consumer Durables, FMCG, IT
              </p>
              
              <div className="w-14 h-12 my-5 bg-black rounded-lg flex justify-start items-center">
                <img
                  src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724594570/Yuga/right-arrow_pbnvnv.svg"
                  alt=""
                  className="w-7 h-7 mx-3"
                />
         
            </div>
            </div>
           
            <div className="h-1/2 ">
            <img src={card_one} alt="" className="h-[18.8rem]" />
            </div>
          </div>
          <div className="h-full w-1/3 py-10 px-20">
            <div className="h-1/2  border-r-4 border-[#F0F0F0]">
              <h3 className="text-5xl font-gothicmedium text-wrap">
                Industry Focus.
              </h3>
              <p className="text-xl text-slate-500 font-gothicdemi">
                Automobile, Consumer Durables, FMCG, IT
              </p>
              
              <div className="w-14 h-12 my-5 bg-black rounded-lg flex justify-start items-center">
                <img
                  src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724594570/Yuga/right-arrow_pbnvnv.svg"
                  alt=""
                  className="w-7 h-7 mx-3"
                />
         
            </div>
            </div>
           
            <div className="h-1/2 ">
            <img src={card_one} alt="" className="h-[18.8rem]" />
            </div>
          </div>
          <div className="h-full w-1/3 py-10 px-20">
            <div className="h-1/2  border-r-4 border-[#F0F0F0]">
              <h3 className="text-5xl font-gothicmedium text-wrap">
                Industry Focus.
              </h3>
              <p className="text-xl text-slate-500 font-gothicdemi">
                Automobile, Consumer Durables, FMCG, IT
              </p>
              
              <div className="w-14 h-12 my-5 bg-black rounded-lg flex justify-start items-center">
                <img
                  src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724594570/Yuga/right-arrow_pbnvnv.svg"
                  alt=""
                  className="w-7 h-7 mx-3"
                />
         
            </div>
            </div>
           
            <div className="h-1/2 ">
            <img src={card_one} alt="" className="h-[18.8rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
