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

const renderContent = (currentStage) => {
  switch (currentStage) {
    case 1:
      return (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
          Hi, I am <span className="font-semibold">Gary</span> 👨‍💻
          <br />A Self-Taught Software Engineer
        </h1>
      );
    case 2:
      return (
        <InfoBox
          text={
            <div>
              👋 Welcome to My Website! <br />
              🔧 Built with React and Three.js: <br />
              I've integrated Three.js to bring 3D graphics to life. Whether
              it's captivating animations, intricate models, or immersive
              scenes, Three.js adds a new dimension to web design.
            </div>
          }
          link="https://threejs.org/"
          btnText="Learn More 👈"
        />
      );
    case 3:
      return (
        <InfoBox
          text="I've worked with start-ups and established companies where i've picked up many skills along the way 👋"
          link="/about"
          btnText="Learn More 👈"
        />
      );
    case 4:
      return (
        <InfoBox
          text="Need a project done or looking for a dev? I am just a few keystrokes away 👋"
          link="/contact"
          btnText="Let's Talk 👈"
        />
      );
    default:
      return null;
  }
};

const HomeInfo = ({ currentStage }) => {
  return renderContent(currentStage);
};

export default HomeInfo;
