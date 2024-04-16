import ProfilePic from "../shared/profilePic/profilePic";
import "./profile.scss";
import Mønt from "../../../assets/Mønt.png";

const Profile = () => {
  //TODO: ADD STORE IMPLEMENTATION

  return (
    <div className="Profile">
      <div className="Profile_ImageContainer">
        <ProfilePic
          imgSrc="https://via.placeholder.com/150"
          alt="profile"
          editable={true}
        />
      </div>
      <div className="Profile_InfoContainer">
        <p className="Profile_Username">Username</p>
      </div>
      <div className="Profile_CoinContainer">
        <div className="Profile_CoinWrapper">
          <img src={Mønt} alt="coin" className="Profile_CoinIcon" />
          <p className="Profile_CoinText">100</p>
        </div>
        <p className="Profile_CoinText">Eventyrmønter</p>
      </div>
    </div>
  );
};

export default Profile;
