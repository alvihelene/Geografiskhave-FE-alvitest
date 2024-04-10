import React from 'react';
import "./header.scss"


interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {

  return (
    <div className="header">
        <div>{currentPage}</div> 
    </div>
  );
};

export default Header;

