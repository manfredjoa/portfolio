import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesSummer = () => {
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
          value: 100,
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
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693178568/Portfolio/Summer/1.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693178815/Portfolio/Summer/2.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693193783/Portfolio/Summer/3.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1694111574/Portfolio/Summer/4.png",
                particles: {
                  size: {
                    value: { min: 10, max: 18 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1694111599/Portfolio/Summer/5.png",
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

export default ParticlesSummer;
