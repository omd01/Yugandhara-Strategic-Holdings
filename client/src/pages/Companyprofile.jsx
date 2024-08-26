import { useParams } from "react-router-dom";
import companyData from "../assets/company.json";
import Hero from "../components/company/Hero";
import About from "../components/company/About";
import Services from "../components/company/services";
import Expertise from "../components/company/Expertise";
import Mission from "../components/company/Mission";
import Fotter from "../components/company/Fotter";

const CompanyProfile = () => {
  const { slug } = useParams();
  const company = companyData.find((c) => c.slug === slug);

  if (!company) {
    return <p>Company not found</p>;
  }

  return (
    <div className="h-screen w-full">
      <Hero company={company}/>
      <About company={company}/>
      <Services company={company}/>
      <Expertise company={company}/>
      <Mission company={company}/>
      <Fotter company={company}/>
    </div>
  );
};

export default CompanyProfile;
