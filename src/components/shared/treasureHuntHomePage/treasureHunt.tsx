import "./treasureHunt.scss";

const TreasureHunt = () => {
  return (
    <div className="TreasureHunt">
      <div className="TreasureHunt_Container">

        <div className="TreasureHunt_ImageContainer">
          <div className="TreasureHunt_InfoContainer">
            <div className="TreasureHunt_InfoContainer_Header">
              Geografisk eventyr
            </div>
            <div className="TreasureHunt_InfoContainer_Content">
              <div className="Left1">
                <p className="TreasureHunt_InfoContainer_Content_Text">
                  Opgave 4 |{" "}
                </p>
              </div>
              <div className="Right1">
                <p className="TreasureHunt_InfoContainer_Content_Text">
                  Naturhaven
                </p>
              </div>
            </div>
            <div className="TreasureHunt_InfoContainer_Progress">
              <div className="Progressbar">
                <div className="Line">
                  <div className="Line_Taskprogress"></div>

                </div>
                <div className="TasksProgress">4/6</div>
              </div>
              <div className="TreasureHunt_BackButton">
                <img src="./src/assets/icons/edit.svg" alt="Back Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureHunt;
