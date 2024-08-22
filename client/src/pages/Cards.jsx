import Navbar from "../components/navigation/Navbar";
import Card from "../components/cards/Card";
const logo1 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004172/Yuga/Company%20Logos/Nikaay_u71ujk.svg';
const logo2 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004171/Yuga/Company%20Logos/Mask_Production_gwcgqx.svg';
const logo3 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004171/Yuga/Company%20Logos/Envifuture_ks0rmj.svg';
const logo4 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004169/Yuga/Company%20Logos/Yugandhara_Foundation_nesbu5.svg';
const logo5 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724337335/Yuga/Company%20Logos/Yugandhara_Strategic_Holdings_ao84bo.svg';
const logo6 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004168/Yuga/Company%20Logos/YUGA_Weddings_p9pdhr.svg';
const logo7 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004166/Yuga/Company%20Logos/Yuga_Studios_bixo6l.svg';
const logo8 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004165/Yuga/Company%20Logos/YUGA_Sports_Entertainment_gyc9ki.svg';
const logo9 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004165/Yuga/Company%20Logos/Yuga_Production_House_w3hxln.svg';
const logo10 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004163/Yuga/Company%20Logos/YUGA_Hospitality_vwphur.svg';
const logo11 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004162/Yuga/Company%20Logos/Useless_vn8okj.svg';
const logo12 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004161/Yuga/Company%20Logos/TMS_Global_Kitchen_fqa8ss.svg';
const logo13 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004161/Yuga/Company%20Logos/Urban_Farmer_yyirob.svg';
const logo14 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004160/Yuga/Company%20Logos/SM_Consultancy_qbfrt4.svg';
const logo15 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004159/Yuga/Company%20Logos/Rooh_Photography_zz5hij.svg';
const logo16 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004159/Yuga/Company%20Logos/SIGA_bf7iav.svg';

function Cards() {

    const cardsData = [
        { logo: logo1 },
        { logo: logo2 },
        { logo: logo3 },
        { logo: logo4 },
        { logo: logo5 },
        { logo: logo6 },
        { logo: logo7 },
        { logo: logo8 },
        { logo: logo9 },
        { logo: logo10 },
        { logo: logo11 },
        { logo: logo12 },
        { logo: logo13 },
        { logo: logo14 },
        { logo: logo15 },
        { logo: logo16 },
    ];

    return (
        <>
        <Navbar />
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 pt-10 max-md:grid-cols-3 ">
            {cardsData.map((card, index) => (
              <Card key={index} logo={card.logo} title={card.title} />
            ))}
          </div>
        </div>
        </>
      );
    };

    export default Cards;