import Navbar from "../components/navigation/Navbar";
import Card from "../components/cards/Card";
import { all_cards } from "../assets";

function Cards() {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center ">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 pt-10 max-md:grid-cols-3  ">
          {all_cards.map((card, index) => (
            <Card key={index} logo={card.logo} title={card.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
