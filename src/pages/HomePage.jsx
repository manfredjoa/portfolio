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
    <div>
      <h1
        className="text-center text-5xl text-white"
        onMouseEnter={showWinter}
        onMouseLeave={noShow}
      >
        Winter
      </h1>
      <h1
        className="text-center text-5xl text-white"
        onMouseEnter={showSpring}
        onMouseLeave={noShow}
      >
        Spring
      </h1>
      <h1
        className="text-center text-5xl text-white"
        onMouseEnter={showSummer}
        onMouseLeave={noShow}
      >
        Summer
      </h1>
      <h1
        className="text-center text-5xl text-white"
        onMouseEnter={showAutumn}
        onMouseLeave={noShow}
      >
        Fall
      </h1>
      {(showWinterParticles && <ParticlesWinter />) ||
        (showSpringParticles && <ParticlesSpring />) ||
        (showSummerParticles && <ParticlesSummer />) ||
        (showAutumnParticles && <ParticlesAutumn />)}
    </div>
  );
}

export default HomePage;
