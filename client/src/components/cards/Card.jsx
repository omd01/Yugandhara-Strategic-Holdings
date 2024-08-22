const Cards = ({ logo, title }) => {
  return (
    <>
      <div className="card cursor-pointer w-[8.125rem] h-[8.125rem] max-sm:w-[6rem] max-sm:h-[6rem] max-msm:w-[5rem] max-msm:h-[5rem] border flex-shrink-0 bg-[#F2F2F2] rounded-[2rem] shadow hover:shadow-lg max-sm:rounded-3xl transition-shadow duration-300 flex justify-center items-center ">
        <img src={logo} alt={title} className="w-full h-full mx-auto " />
      </div>
    </>
  );
};

export default Cards;
