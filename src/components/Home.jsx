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
            className="text-5xl text-gray-200 flex justify-center items-center z-10 mr-5 border-white border-2 hover:opacity-70 transition duration-500 ease-in-out"
            style={{
              height: "15vw",
              width: "15vw",
              backgroundImage:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Autumn.jpg",
              backgroundSize: "cover",
            }}
            onMouseEnter={showAutumn}
          >
            About
          </div>

          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 ml-5 border-white border-2 hover:opacity-70 transition duration-500 ease-in-out"
            style={{
              height: "15vw",
              width: "15vw",
              background:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Spring.jpg)",
              backgroundSize: "cover",
            }}
            onMouseEnter={showSpring}
          >
            Projects
          </div>
        </div>

        <div className="flex justify-center items-start w-screen mt-5">
          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 mr-5 border-white border-2 hover:opacity-70 transition duration-500 ease-in-out"
            style={{
              height: "15vw",
              width: "15vw",
              background:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Winter.jpg)",
              backgroundSize: "cover",
            }}
            onMouseEnter={showWinter}
          >
            Resume
          </div>
          <div
            className="text-5xl text-gray-200 flex justify-center items-center z-10 ml-5 border-white border-2 hover:opacity-70 transition duration-500 ease-in-out"
            style={{
              height: "15vw",
              width: "15vw",
              background:
                "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Summer.jpg)",
              backgroundSize: "cover",
            }}
            onMouseEnter={showSummer}
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
