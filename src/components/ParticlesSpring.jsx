import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesSpring = () => {
  const options = useMemo(() => {
    return {
      particles: {
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
          value: 150,
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
          type: "image",
          options: {
            image: [
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693176429/Portfolio/Spring/1.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693176482/Portfolio/Spring/2.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693176808/Portfolio/Spring/3.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693177065/Portfolio/Spring/4.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693177492/Portfolio/Spring/5.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
            ],
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesSpring;
