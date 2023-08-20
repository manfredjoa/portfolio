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
            min: 0.1,
            max: 1,
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
            max: 30,
          },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 10,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 30,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        shape: {
          type: ["image"],
          options: {
            image: [
              {
                src: "https://png2.cleanpng.com/sh/8fe99edf4188be2f095f4f8e31e3ef8f/L0KzQYi4UcI5N2k9UJGAYUHnRoTrgcFmamdmS5CEM0W3QYmBWcE2OWI9T6cANEa0QoaBTwBvbz==/5a1d63da1eb6a3.9354188915118755461258.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/e44b0c85e8b794d5fc8c8daa16917b9d/L0KzQYi4UcI5N5UAfJGAYUHnRoTtgcRnaWhmTZC5MUazSIm9WcE2OWI9T6cAN0i2Qoe6TwBvbz==/5a1d63fa4fa7a5.0160886915118755783263.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
            ],
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

export default ParticlesAutumn;
