import React from "react";
import { IBadge } from "../../../interfaces/IBadge";
import badgeImg from "../../../assets/images/badges/BadgeProfil.png";
import Badge from "../../../components/badge/badge";
import "./BadgePage.scss";

const BadgePage = () => {
  const badges: IBadge[] = [
    {
      name: "test 1",
      image: badgeImg,
      completed: true,
      description: "test 1",
    },
    {
      name: "test 2",
      image: badgeImg,
      completed: false,
      description: "test 2",
    },
    {
      name: "test 3",
      completed: false,
      image: badgeImg,
      description: "test 3",
    },
  ];

  return (
    <div className="BadgePage">
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
    </div>
  );
};

export default BadgePage;
