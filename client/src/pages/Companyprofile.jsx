import { useParams } from "react-router-dom";
import companyData from "../assets/company.json";

const CompanyProfile = () => {
  const { slug } = useParams();
  const company = companyData.find((c) => c.slug === slug);

  if (!company) {
    return <p>Company not found</p>;
  }

  return (
    <div>
       <h1 style={{ color: company.color }}>{company.name}</h1>
      <p>Displaying details for company with ID: {slug}</p>
      {/* Display company information based on companyId */}
    </div>
  );
};

export default CompanyProfile;
