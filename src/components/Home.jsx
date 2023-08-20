import ParticlesWinter from "../components/ParticlesWinter";
import ParticlesSpring from "../components/ParticlesSpring";
import ParticlesSummer from "../components/ParticlesSummer";
import ParticlesAutumn from "../components/ParticlesAutumn";
// import { useState } from "react";

function Home({
  showWinterParticles,
  setShowWinterParticles,
  showSpringParticles,
  setShowSpringParticles,
  showSummerParticles,
  setShowSummerParticles,
  showAutumnParticles,
  setShowAutumnParticles,
  showWinter,
  showSpring,
  showSummer,
  showAutumn,
  noShow,
}) {
  return (
    <div className="flex items-center h-screen w-screen">
      <div
        className="flex flex-wrap w-2/4 mx-auto"
        // style={{ height: "40vw" }}
      >
        <div className="flex justify-center items-end w-screen mb-5">
          <div
            className="text-5xl text-white flex justify-center items-center z-10 mr-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
            onMouseEnter={showAutumn}
            // onMouseLeave={noShow}
          >
            About
          </div>

          <div
            className="text-5xl text-white flex justify-center items-center z-10 ml-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
            onMouseEnter={showSpring}
            // onMouseLeave={noShow}
          >
            Projects
          </div>
        </div>

        <div className="flex justify-center items-start w-screen mt-5">
          <div
            className="text-5xl text-white flex justify-center items-center z-10 mr-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
            onMouseEnter={showWinter}
            // onMouseLeave={noShow}
          >
            Resume
          </div>
          <div
            className="text-5xl text-white flex justify-center items-center z-10 ml-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
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

export default Home;
