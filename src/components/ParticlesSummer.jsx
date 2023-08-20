import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesSummer() {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#ffde38",
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
          speed: {
            min: 0.3,
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
                src: "https://png2.cleanpng.com/sh/81237ad470be08fdd84567a445a82b7e/L0KzQYm3UsAzN51rfZH0aYP2gLBuTfp2cZRqRelqdHX1fbbzjB4udaZmkZ99aHHsPcjolPVzdZZxh9C2NXG6RYSAVvRkP2I3Tao3OUm7QYm7V8IyPWI8TqU6M0S0SIK8VL5xdpg=/kisspng-juice-watermelon-muay-thai-watermelon-5a75376dc71258.9981847215176313418154.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/d10038bc3ab92b422c5aa232c4a9fbbd/L0KzQYi4UcI4N5U2epGAYUHmQoaAUcA2Pmg4UZCDNka0SIm4UsE2OWI8UaY5M0OzQoO4TwBvbz==/5a1c2571056739.8661881215117940330221.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/4e24db439ed90acb02f5acfad2bbca3e/L0KzQYm3U8AyN5lBj5H0aYP2gLBuTfNieqV0h9C2c4Xwfbb5TgJwgZJxjOs2ZoLodX7wjPx2e6V3eeZyb36wd8Pshf4ue5pyiN5uLXPyc7F1lgQufKNqfeU2NXG8SIjohME6bmlnSaM3NUK1SIWCV8MyPWIAUaY7M0W2Roa6Vb5xdpg=/kisspng-cartoon-summer-royalty-free-illustration-green-simple-coconut-trees-5a987ad19f8b11.5228497315199423536535.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/d9bb5fddf1a218e2047f48c7610df9f8/L0KzQYi4UcI4N2E5SZGAYUHmRbO5hMEyPmRqSZC8MEm0RomCUcE2OWI9SKkCOEmzR4K5TwBvbz==/5a1c5b2d1163e1.3091689115118077890712.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/c146da818651656154714271b6103e4b/L0KzQYm3UsAzN5pmfZH0aYP2gLBuTgVuaqNqhN5qLXLocbTvTgNpaZVqReJqcnH2f720VfE4PGo1e6QEY3O8QIG1Wck0O2k1SKk6NUG6RYmBVsc1PmU3SpD5bne=/kisspng-umbrella-beach-shade-parasol-5a7490c29cc900.9933800715175886746422.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
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

export default ParticlesSummer;
