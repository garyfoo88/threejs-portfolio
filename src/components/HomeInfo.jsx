import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
      </Link>
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Gary</span> 👨‍💻
      <br />A Self-Taught Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="I've worked with start-ups and established companies where i've picked up many skills along the way 👋"
      link="/about"
      btnText="Learn More 👈"
    />
  ),
  3: (
    <InfoBox
      text="I've worked with start-ups and established companies where i've picked up many skills along the way 👋"
      link="/about"
      btnText="Learn More 👈"
    />
  ),
  4: (
    <InfoBox
      text="I've worked with start-ups and established companies where i've picked up many skills along the way 👋"
      link="/about"
      btnText="Learn More 👈"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
