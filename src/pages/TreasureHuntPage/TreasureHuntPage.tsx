import Header from "../../components/shared/header/header";
import TreasureHunt from "../../components/shared/treasureHuntHomePage/treasureHunt";

const TreasureHuntPage = () => {
  return (
    <div className="TreasureHuntPage">
      <Header currentPage="Skattejagt" />
      <TreasureHunt />
    </div>
  );
};

export default TreasureHuntPage;
