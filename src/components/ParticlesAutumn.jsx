import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesAutumn() {
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
            max: 1,
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
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175699/Portfolio/Autumn/fall-leaves-png-transparent-13_hs7g9e.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175734/Portfolio/Autumn/fall-leaves-png-transparent-14_dzrgxt.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175789/Portfolio/Autumn/fall-leaves-png-transparent-7_xjxwf1.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175834/Portfolio/Autumn/fall-leaves-png-transparent-6_s5vxwx.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693175903/Portfolio/Autumn/kc85GM5Mi_iotrsx.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
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
}

export default ParticlesAutumn;
