const Mission = ({ company }) => {
  const { themecolor, mission_mission, mission_commitment } = company;

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full ">
        <div className="px-3 py-5 flex items-center justify-center">
          <h1 className=" text-7xl md:*:text-8xl font-gothicmedium">Mission</h1>
          <div
            className="h-3 w-3 self-end mx-2 mb-4"
            style={{ background: themecolor }}
          ></div>
        </div>

        <div className="w-full h-1/2 flex flex-col md:flex-row px-4 md:px-10 ">
          <div className="right md:w-1/2 flex justify-center items-center md:border-b-4 border-slate-400 h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <h1 className=" text-3xl  md:text-5xl font-gothicmedium">
            Mission
              </h1>
              <div
                className="h-2 w-2 self-end mx-2 mb-4"
                style={{ background: themecolor }}
              ></div>
            </div>
          </div>
          <div className="right md:w-1/2 flex justify-center border-b-4 md:border-slate-400 items-center h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <p className="text-xl md:text-3xl font-gothicmedium">
                {mission_mission}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 flex flex-col md:flex-row px-4 md:px-10 ">
          <div className="right md:w-1/2 flex justify-center items-center  h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <h1 className=" text-3xl  md:text-5xl font-gothicmedium">
               Commitment
              </h1>
              <div
                className="h-2 w-2 self-end mx-2 mb-4"
                style={{ background: themecolor }}
              ></div>
            </div>
          </div>
          <div className="right md:w-1/2 flex justify-center  items-center h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <p className="text-xl md:text-3xl font-gothicmedium">
                {mission_commitment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
