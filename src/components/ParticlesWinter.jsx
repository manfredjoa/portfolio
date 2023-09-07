import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesWinter() {
  const options = useMemo(() => {
    return {
      particles: {
        color: {
          value: ["#FFFFFF"],
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          size: true,
          speed: {
            min: 0.3,
            max: 2,
          },
        },
        number: {
          value: 300,
          density: {
            enable: true,
            area: 800,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "bottom",
          move: true,
          animation: {
            enable: true,
            speed: 5,
          },
        },
        shape: {
          type: ["circle", "image"],
          options: {
            image: [
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175175/Portfolio/Winter/1.png",
                particles: {
                  size: {
                    value: { min: 4, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175152/Portfolio/Winter/2.png",
                particles: {
                  size: {
                    value: { min: 4, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175126/Portfolio/Winter/3.png",
                particles: {
                  size: {
                    value: { min: 4, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175100/Portfolio/Winter/4.png",
                particles: {
                  size: {
                    value: { min: 4, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175044/Portfolio/Winter/5.png",
                particles: {
                  size: {
                    value: { min: 4, max: 18 },
                  },
                },
              },
            ],
          },
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 30,
          },
          enlighten: {
            enable: true,
            value: 30,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

export default ParticlesWinter;
