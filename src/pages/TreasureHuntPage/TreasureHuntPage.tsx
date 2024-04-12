import Header from "../../components/shared/header/header";
import "./TreasureHuntPage.scss";
const TreasureHuntPage = () => {
  return (
    <div className="TreasureHuntPage">
      <Header currentPage="Skattejagt" />
      <div className="TreasureHuntPage_ImageContainer"></div>
      
      <div className="TreasureHuntPage_ContentContainer">
        <div className="TreasureHuntPage_ContentContainer_Header">Geografisk eventyr</div>
        <div className="TreasureHuntPage_ContentContainer_Text">
          Er I klar til en spændende skattejagt gennem Geografisk Have? 
          <br />
          <br />
          I haven venter der spændende og sjove opgaver, og ikke mindst et
          puslespil, som I skal samle sammen til under skattejagten. Når jeres
          eventyr er fuldført, venter der en skøn præmie til alle skattejægerne!
        </div>
      </div>
    </div>
  );
};

export default TreasureHuntPage;
