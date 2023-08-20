import Home from "../components/Home";
import { useState } from "react";

function HomePage() {
  const [showWinterParticles, setShowWinterParticles] = useState(false);
  const [showSpringParticles, setShowSpringParticles] = useState(false);
  const [showSummerParticles, setShowSummerParticles] = useState(false);
  const [showAutumnParticles, setShowAutumnParticles] = useState(false);

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
      {showWinterParticles && (
        <div
          className="h-screen w-screen absolute"
          style={{
            backgroundImage:
              "url(https://www.transparenttextures.com/patterns/fresh-snow.png)",
            backgroundColor: "rgb(8, 47, 73)",
          }}
        ></div>
      )}
      <Home
        showWinterParticles={showWinterParticles}
        setShowWinterParticles={setShowWinterParticles}
        showSpringParticles={showSpringParticles}
        setShowSpringParticles={setShowSpringParticles}
        showSummerParticles={showSummerParticles}
        setShowSummerParticles={setShowSummerParticles}
        showAutumnParticles={showAutumnParticles}
        setShowAutumnParticles={setShowAutumnParticles}
        showWinter={showWinter}
        showSpring={showSpring}
        showSummer={showSummer}
        showAutumn={showAutumn}
        noShow={noShow}
      />
    </div>
  );
}

export default HomePage;
