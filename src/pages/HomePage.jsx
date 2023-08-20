import ParticlesWinter from "../components/ParticlesWinter";
import ParticlesSpring from "../components/ParticlesSpring";
import ParticlesSummer from "../components/ParticlesSummer";
import ParticlesAutumn from "../components/ParticlesAutumn";
import { useState } from "react";

function HomePage() {
  const [showWinterParticles, setShowWinterParticles] = useState(false);
  const [showSpringParticles, setShowSpringParticles] = useState(false);
  const [showSummerParticles, setShowSummerParticles] = useState(false);
  const [showAutumnParticles, setShowAutumnParticles] = useState(false);

  const showWinter = () => {
    setShowWinterParticles(true);
  };

  const showSpring = () => {
    setShowSpringParticles(true);
  };

  const showSummer = () => {
    setShowSummerParticles(true);
  };

  const showAutumn = () => {
    setShowAutumnParticles(true);
  };

  const noShow = () => {
    setShowWinterParticles(false);
    setShowSpringParticles(false);
    setShowSummerParticles(false);
    setShowAutumnParticles(false);
  };

  return (
    <div className="height-screen bg-black">
      <div
        className="text-center text-5xl text-white 
        "
        // bg-gradient-to-b from-sky-950 to-white
        style={{ height: "25vh" }}
        onMouseEnter={showWinter}
        onMouseLeave={noShow}
      >
        Winter
      </div>
      <div
        className="height-1/4 text-center text-5xl text-white 
        "
        // bg-gradient-to-b from-sky-400 via-rose-200 to-green-300
        style={{ height: "25vh" }}
        onMouseEnter={showSpring}
        onMouseLeave={noShow}
      >
        Spring
      </div>
      <div
        className="height-1/4 text-center text-5xl text-white 
        "
        // bg-gradient-to-b from-amber-300 via-sky-400 to-yellow-700
        style={{ height: "25vh" }}
        onMouseEnter={showSummer}
        onMouseLeave={noShow}
      >
        Summer
      </div>
      <div
        className="height-1/4 text-center text-5xl text-white 
        "
        // bg-gradient-to-b from-sky-600 to-orange-800
        style={{ height: "25vh" }}
        onMouseEnter={showAutumn}
        onMouseLeave={noShow}
      >
        Fall
      </div>
      {(showWinterParticles && <ParticlesWinter />) ||
        (showSpringParticles && <ParticlesSpring />) ||
        (showSummerParticles && <ParticlesSummer />) ||
        (showAutumnParticles && <ParticlesAutumn />)}
    </div>
  );
}

export default HomePage;
