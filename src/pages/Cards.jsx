import Navbar from "../components/navigation/Navbar";
import Card from "../components/cards/Card";
// import { all_cards } from "../assets";
import companies from "../assets/company.json";

function Cards() {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center ">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 pt-10 max-md:grid-cols-3  ">
          {companies.map((company, index) => (
            <Card key={index} logo={company.logo} title={company.title} slug={company.slug} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
