import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesSpring() {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#fecdd3",
        },
      },
      particles: {
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          size: true,
          speed: 90,
        },
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800,
          },
        },
        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "https://png2.cleanpng.com/sh/0321456359b364e1871e10ad5cb6d259/L0KzQYm3UsA2N6Z7iZH0aYP2gLBuTgRmaaN4RdZ7b4Cwc73wkL1ieqUyjORqboPzccPsjwQuf5J5feQ2ZILygL3slQMuPZI8UKYAOUW8coS7UskvOmM1TKc7OEi0RYKAWMMyPWg4TqUANz7zfri=/kisspng-tears-drop-clip-art-transparent-water-droplets-5a7845959b3429.2204528815178315736357.png",
                particles: {
                  size: {
                    value: 5,
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/52d08c0787b8284165af6e3a1e3bdd7c/L0KzQYm3UsA5N6FuiZH0aYP2gLBuTfRzd6EyitNybj31cbr1TfRzd6F4ReZ7YX72gLL5hf51NZZrftdsdD24cYjqWMg5PGoAUKsEOD68QIm7UsE2P2I6Sao6MUC7RYO9Usg6NqFzf3==/kisspng-drop-rain-rain-drops-transparent-effect-5a7c8884998998.9084215715181108526289.png",
                particles: {
                  size: {
                    value: 5,
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/fcb697bf3c54e95664b955ecbaf4a344/L0KzQYi4UsE2N2dqTZGAYUO3SYntg8djQJdrSJC8M0CzSYaBWcE2OWQ4Uag9N0a4QIe4TwBvbz==/5a3498fc7b8ff0.3300958915133964765061.png",
                particles: {
                  size: {
                    value: 5,
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

export default ParticlesSpring;
