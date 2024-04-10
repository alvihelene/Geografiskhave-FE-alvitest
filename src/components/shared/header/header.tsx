import React from 'react';
import "./header.scss"

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <div className="header">
      <div className="left-icon">
        {currentPage !== "firstPage" && <p>{"<-"}</p>}
      </div>
      <div className="currentPage">{currentPage}</div>
      <div className="right-icon">
        {currentPage !== "lastPage" && <p>X</p>}
      </div>
    </div>
  );
};

export default Header;