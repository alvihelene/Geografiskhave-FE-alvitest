import "./prize.scss";
import { IPrize } from "../../interfaces/IPrize";
import Mønt from "../../assets/Mønt.png";

const Prize = ({ name, price, imageUrl }: IPrize) => {
  const getCoinText = (price: number) => {
    return price > 0 ? price.toString() + " Eventyrmønter" : "Gratis præmie";
  };

  return (
    <div className="Prize" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="Prize_Info">
        {price > 0 && (
          <div className="Prize_Info_CoinContainer">
            <img src={Mønt} alt="mønt" />
          </div>
        )}
        <div className="Prize_Info_Text">
          <p className="Prize_Info_Text_Title">{name}</p>{" "}
          <p className="Prize_Info_Text_Price">{getCoinText(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Prize;
