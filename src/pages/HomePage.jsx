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
    <div className="h-screen w-screen">
      <div className="flex flex-wrap h-screen w-2/4 m-auto">
        <div className="flex items-end">
          <div
            className="text-5xl text-white flex justify-center items-center z-10 border-white border-2"
            // bg-gradient-to-b from-sky-950 to-white
            style={{ height: "25vw", width: "25vw" }}
            onMouseEnter={showAutumn}
            // onMouseLeave={noShow}
          >
            About
          </div>

          <div
            className="text-5xl text-white flex justify-center items-center z-10 border-white border-2"
            // bg-gradient-to-b from-sky-400 via-rose-200 to-green-300
            style={{ height: "25vw", width: "25vw" }}
            onMouseEnter={showSpring}
            // onMouseLeave={noShow}
          >
            Projects
          </div>
        </div>

        <div className="flex items-start">
          <div
            className="text-5xl text-white flex justify-center items-center z-10 border-white border-2"
            // bg-gradient-to-b from-amber-300 via-sky-400 to-yellow-700
            style={{ height: "25vw", width: "25vw" }}
            onMouseEnter={showWinter}
            // onMouseLeave={noShow}
          >
            Resume
          </div>
          <div
            className="text-5xl text-white flex justify-center items-center z-10 border-white border-2"
            // bg-gradient-to-b from-sky-600 to-orange-800
            style={{ height: "25vw", width: "25vw" }}
            onMouseEnter={showSummer}
            // onMouseLeave={noShow}
          >
            Contact
          </div>
        </div>

        {(showWinterParticles && <ParticlesWinter />) ||
          (showSpringParticles && <ParticlesSpring />) ||
          (showSummerParticles && <ParticlesSummer />) ||
          (showAutumnParticles && <ParticlesAutumn />)}
      </div>
    </div>
  );
}

export default HomePage;
