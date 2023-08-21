import ParticlesWinter from "../components/ParticlesWinter";
import ParticlesSpring from "../components/ParticlesSpring";
import ParticlesSummer from "../components/ParticlesSummer";
import ParticlesAutumn from "../components/ParticlesAutumn";

function Home({
  showWinterParticles,
  showSpringParticles,
  showSummerParticles,
  showAutumnParticles,
  showWinter,
  showSpring,
  showSummer,
  showAutumn,
}) {
  return (
    <div className="flex items-center h-screen w-screen">
      <div className="flex flex-wrap w-2/4 mx-auto">
        <div className="flex justify-center items-end w-screen mb-5">
          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 mr-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
            onMouseEnter={showAutumn}
            // onMouseLeave={noShow}
          >
            About
          </div>

          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 ml-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
            onMouseEnter={showSpring}
            // onMouseLeave={noShow}
          >
            Projects
          </div>
        </div>

        <div className="flex justify-center items-start w-screen mt-5">
          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 mr-5 border-white border-2"
            style={{ height: "15vw", width: "15vw" }}
            onMouseEnter={showWinter}
            // onMouseLeave={noShow}
          >
            Resume
          </div>
          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 ml-5 border-white border-2"
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
