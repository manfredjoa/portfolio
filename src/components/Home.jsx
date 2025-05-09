import { useState, useEffect } from "react";
import ParticlesWinter from "../components/ParticlesWinter";
import ParticlesSpring from "../components/ParticlesSpring";
import ParticlesSummer from "../components/ParticlesSummer";
import ParticlesAutumn from "../components/ParticlesAutumn";
import { ContactModal } from "./ContactModal";
import { ProjectsModal } from "./ProjectsModal";
import { AboutModal } from "./AboutModal";

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

  const [mobileView, setMobileView] = useState(false);

  const [openAbout, setOpenAbout] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  const handleOpen = (e) => {
    if (openAbout || openProjects || openContact) {
      setOpenAbout(false);
      setOpenProjects(false);
      setOpenContact(false);
    } else if (e.target.className.includes("about")) {
      setOpenAbout(!openAbout);
    } else if (e.target.className.includes("projects")) {
      setOpenProjects(!openProjects);
    } else if (e.target.className.includes("contact"))
      setOpenContact(!openContact);
  };

  return (
    <div>
      <div
        className="flex items-center justify-center z-10 w-screen absolute"
        style={{ height: "12.5vh", fontFamily: "'Sudbury Book', sans-serif" }}
      >
        <div className="flex flex-col text-center">
          <h1
            className="text-center text-5xl mt-5"
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
          <h1
            className="text-2xl text-white"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "3px 3px 5px black",
              color:
                (showAutumnParticles && "rgb(79, 68, 65)") ||
                (showSpringParticles && "rgb(209, 128, 167)") ||
                (showWinterParticles && "rgb(8, 47, 73)") ||
                (showSummerParticles && "rgb(232, 160, 84)"),
            }}
          >
            AI Tester | Full-Stack Software Engineer
          </h1>
        </div>
      </div>

      <div className="flex items-center h-screen w-screen">
        <div className="flex flex-col h-3/4 w-2/4 items-center justify-center m-auto">
          <div className="flex justify-center w-screen mb-5">
            <div
              className="about text-4xl text-gray-200 flex justify-center items-center mr-5 border-white border-x border-y cursor-pointer"
              style={{
                height: mobileView ? "30vw" : "15vw",
                width: mobileView ? "30vw" : "15vw",
                backgroundImage:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Autumn.jpg",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showAutumnParticles ? 1 : 0.7,
                zIndex: showAutumnParticles ? 0 : 2,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showAutumn}
              onClick={handleOpen}
            >
              <h1
                className="about"
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
              className="projects text-4xl text-gray-200 flex justify-center items-center ml-5 border-white border-x border-y cursor-pointer"
              style={{
                height: mobileView ? "30vw" : "15vw",
                width: mobileView ? "30vw" : "15vw",
                background:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Spring.jpg)",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showSpringParticles ? 1 : 0.7,
                zIndex: showSpringParticles ? 0 : 2,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showSpring}
              onClick={handleOpen}
            >
              <h1
                className="projects"
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
              className="text-4xl text-gray-200 flex justify-center items-center mr-5 border-white border-x border-y cursor-pointer"
              style={{
                height: mobileView ? "30vw" : "15vw",
                width: mobileView ? "30vw" : "15vw",
                background:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Winter.jpg)",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showWinterParticles ? 1 : 0.7,
                zIndex: showWinterParticles ? 0 : 2,
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
              className="contact text-4xl text-gray-200 flex justify-center items-center ml-5 border-white border-x border-y cursor-pointer"
              style={{
                height: mobileView ? "30vw" : "15vw",
                width: mobileView ? "30vw" : "15vw",
                background:
                  "url(https://res.cloudinary.com/doqgufzuq/image/upload/v1694114483/Portfolio/Photos/Summer.jpg)",
                backgroundSize: "cover",
                fontFamily: "'Sudbury Book', sans-serif",
                opacity: showSummerParticles ? 1 : 0.7,
                zIndex: showSummerParticles ? 0 : 2,
                boxShadow: "5px 5px 10px black",
              }}
              onMouseEnter={showSummer}
              onClick={handleOpen}
            >
              <h1
                className="contact"
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
      <AboutModal open={openAbout} handleOpen={handleOpen} />
      <ProjectsModal open={openProjects} handleOpen={handleOpen} />
      <ContactModal open={openContact} handleOpen={handleOpen} />
    </div>
  );
};

export default Home;
