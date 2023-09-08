import Home from "../components/Home";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [showWinterParticles, setShowWinterParticles] = useState(false);
  const [showSpringParticles, setShowSpringParticles] = useState(false);
  const [showSummerParticles, setShowSummerParticles] = useState(false);
  const [showAutumnParticles, setShowAutumnParticles] = useState(false);

  useEffect(() => {
    showAutumn();
  }, []);

  const showWinter = () => {
    noShow();
    setShowWinterParticles(true);
  };

  const showSpring = () => {
    noShow();
    setShowSpringParticles(true);
  };

  const showSummer = () => {
    noShow();
    setShowSummerParticles(true);
  };

  const showAutumn = () => {
    noShow();
    setShowAutumnParticles(true);
  };

  const noShow = () => {
    setShowWinterParticles(false);
    setShowSpringParticles(false);
    setShowSummerParticles(false);
    setShowAutumnParticles(false);
  };

  return (
    <div>
      {(showWinterParticles && (
        <div
          className="h-screen w-screen absolute"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694099280/Portfolio/Transparent%20Backgrounds/Winter%20Texture.png)",
            backgroundColor: "rgb(8, 47, 73)",
          }}
        ></div>
      )) ||
        (showSpringParticles && (
          <div
            className="h-screen w-screen absolute"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694110543/Portfolio/Transparent%20Backgrounds/Spring%20Texture.png)",
              backgroundColor: "rgb(209, 128, 167)",
            }}
          ></div>
        )) ||
        (showSummerParticles && (
          <div
            className="h-screen w-screen absolute"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694110529/Portfolio/Transparent%20Backgrounds/Summer%20Texture.png)",
              backgroundColor: "rgb(232, 160, 84)",
            }}
          ></div>
        )) ||
        (showAutumnParticles && (
          <div
            className="h-screen w-screen absolute"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694099355/Portfolio/Transparent%20Backgrounds/Autumn%20Texture.png)",
              backgroundColor: "rgb(79, 68, 65)",
            }}
          ></div>
        ))}

      <Home
        showWinterParticles={showWinterParticles}
        showSpringParticles={showSpringParticles}
        showSummerParticles={showSummerParticles}
        showAutumnParticles={showAutumnParticles}
        showWinter={showWinter}
        showSpring={showSpring}
        showSummer={showSummer}
        showAutumn={showAutumn}
      />
    </div>
  );
};

export default HomePage;
