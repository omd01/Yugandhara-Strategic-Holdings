import React, { useState } from "react";
import { useParams } from "react-router-dom";
import companyData from "../assets/company.json";
import Hero from "../components/company/Hero";
import About from "../components/company/About";
import Services from "../components/company/Services";
import Expertise from "../components/company/Expertise";
import Mission from "../components/company/Mission";
import Fotter from "../components/company/Fotter";
import Navbar from "../components/navigation/Navbar";
import Loader from "../components/company/Loader"; // Ensure the path is correct

const CompanyProfile = () => {
  const { slug } = useParams();
  const company = companyData.find((c) => c.slug === slug);
  const { themecolor } = company;
  const [loading, setLoading] = useState(true);

  if (!company) {
    setLoading(false);
    return (
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="w-full h-4/5 flex justify-center items-center flex-col">
          <h1 className="font-gothicmedium text-8xl my-3">404</h1>
          <h2 className="font-gothicbold text-6xl my-3">Page Not Found</h2>
          <a href="/">
            <div className="px-8 py-3 rounded-3xl bg-[#ED1750] text-white text-xl font-gothicmedium">
              <p>HOME</p>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      {loading && <Loader color={themecolor} onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Hero company={company} />
          <About company={company} />
          <Services company={company} />
          <Expertise company={company} />
          <Mission company={company} />
          <Fotter company={company} />
        </>
      )}
    </div>
  );
};

export default CompanyProfile;
