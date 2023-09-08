import { useState } from "react";
import ParticlesWinter from "../components/ParticlesWinter";
import ParticlesSpring from "../components/ParticlesSpring";
import ParticlesSummer from "../components/ParticlesSummer";
import ParticlesAutumn from "../components/ParticlesAutumn";
import { Modal } from "./Modal";

const Home = ({
  showWinterParticles,
  showSpringParticles,
  showSummerParticles,
  showAutumnParticles,
  showWinter,
  showSpring,
  showSummer,
  showAutumn,
}) => {
  const Resume = "/ManfredJoa.pdf";

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <div
        className="flex items-center justify-center z-10 w-screen absolute"
        style={{ height: "12.5vh" }}
      >
        <h1
          className="text-center text-6xl"
          style={{
            fontFamily: "'Sudbury Book', sans-serif",
            WebkitTextStroke: "1px white",
            textShadow: "3px 3px 5px black",
            color:
              (showAutumnParticles && "rgb(79, 68, 65)") ||
              (showSpringParticles && "rgb(209, 128, 167)") ||
              (showWinterParticles && "rgb(8, 47, 73)") ||
              (showSummerParticles && "rgb(232, 160, 84)"),
          }}
        >
          Manfred Joa
        </h1>
      </div>

      <div className="flex items-center h-screen w-screen">
        <div className="flex flex-col h-3/4 w-2/4 items-center justify-center m-auto">
          <div className="flex justify-center w-screen mb-5">
            <div
              className="text-5xl text-gray-200 flex justify-center items-center z-10 mr-5 border-white border-x border-y cursor-pointer"
              style={{
                height: "15vw",
                width: "15vw",
                backgroundImage:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Autumn.jpg",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showAutumnParticles ? 1 : 0.7,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showAutumn}
            >
              <h1
                style={{
                  WebkitTextStroke: "1px rgb(79, 68, 65)",
                  textShadow: "3px 3px 5px black",
                  opacity: showAutumnParticles ? 1 : 0,
                }}
              >
                About
              </h1>
            </div>

            <div
              className="text-5xl text-gray-200 flex justify-center items-center z-10 ml-5 border-white border-x border-y cursor-pointer"
              style={{
                height: "15vw",
                width: "15vw",
                background:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Spring.jpg)",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showSpringParticles ? 1 : 0.7,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showSpring}
            >
              <h1
                style={{
                  WebkitTextStroke: "1px rgb(209, 128, 167)",
                  textShadow: "3px 3px 5px black",
                  opacity: showSpringParticles ? 1 : 0,
                }}
              >
                Projects
              </h1>
            </div>
          </div>

          <div className="flex justify-center w-screen mt-5">
            <a
              href={Resume}
              target="_blank"
              className="text-5xl text-gray-200 flex justify-center items-center z-10 mr-5 border-white border-x border-y cursor-pointer"
              style={{
                height: "15vw",
                width: "15vw",
                background:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Winter.jpg)",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showWinterParticles ? 1 : 0.7,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showWinter}
            >
              <h1
                style={{
                  WebkitTextStroke: "1px rgb(8, 47, 73)",
                  textShadow: "3px 3px 5px black",
                  opacity: showWinterParticles ? 1 : 0,
                }}
              >
                Resume
              </h1>
            </a>
            <div
              className="text-5xl text-gray-200 flex justify-center items-center z-10 ml-5 border-white border-x border-y cursor-pointer"
              style={{
                height: "15vw",
                width: "15vw",
                background:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Summer.jpg)",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showSummerParticles ? 1 : 0.7,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showSummer}
              onClick={handleOpen}
            >
              <h1
                style={{
                  WebkitTextStroke: "1px rgb(232, 160, 84)",
                  textShadow: "3px 3px 5px black",
                  opacity: showSummerParticles ? 1 : 0,
                }}
              >
                Contact
              </h1>
            </div>
          </div>

          {(showWinterParticles && <ParticlesWinter />) ||
            (showSpringParticles && <ParticlesSpring />) ||
            (showSummerParticles && <ParticlesSummer />) ||
            (showAutumnParticles && <ParticlesAutumn />)}
        </div>
      </div>
      <Modal open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Home;
