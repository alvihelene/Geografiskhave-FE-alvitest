import React from 'react';
import "./header.scss"


interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const getTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="header">
    <div className="top-container">
        <div className="left-container">
            <div className="left">
            <span>{getTime()}</span>
            </div>
        </div>
        <div className="right-container">
            <div className="right">
                <span className="icon internet"></span>
                <span className="icon wifi"></span>
                <span className="icon battery"></span>
            </div>
        </div>
      </div>
      <div className="bottom-container">
        <div>{currentPage}</div> {/* This is under the right and left divs */}
      </div>
    </div>
  );
};

export default Header;

